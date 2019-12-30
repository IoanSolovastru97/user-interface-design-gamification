import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RoomReservationService} from '../../../core/services/room-reservation.service';
import {CalendarEvent} from '../../../core/models/calendar-event';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EventType} from '../../../core/models/event-type';
import {Venue} from '../../../core/models/venue';
import {Resource} from '../../../core/models/resource';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {ResourceEvent} from '../../../core/models/resource-event';
import {addDays} from 'date-fns';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-edit-room-reservation-smart',
  templateUrl: './edit-room-reservation-smart.component.html',
  styleUrls: ['../create-room-reservation-smart/create-room-reservation-smart.component.css'],
  providers: [DatePipe]
})
export class EditRoomReservationSmartComponent implements OnInit, AfterViewChecked {

  eventToBeEdited: CalendarEvent;
  startPickerTime: any;
  endPickerTime: any;
  venue: Venue;
  eventType: EventType;
  resources: Resource[] = [];

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  todayDate: string;
  startTime: string;
  eventTypes: EventType[];
  venues: Venue[];
  availableResources: Resource[];
  selectedResources: Resource[];
  recurrent = false;


  constructor(private reservationForm: FormBuilder,
              private datePipe: DatePipe,
              private router: Router,
              private roomReservationService: RoomReservationService,
              private cdRef: ChangeDetectorRef) {
  }

  get reservationDate() {
    return this.firstFormGroup.get('reservationDate');
  }

  get reservationStartForm() {
    return this.firstFormGroup.get('reservationStartForm');
  }

  get reservationEndForm() {
    return this.secondFormGroup.get('reservationEndForm');
  }

  get eventTypeForm() {
    return this.thirdFormGroup.get('eventTypeForm');
  }

  get venueForm() {
    return this.thirdFormGroup.get('venueForm');
  }

  get resourceForm() {
    return this.thirdFormGroup.get('resourceForm');
  }

  private static transformTimeToString(time: any) {

    let minute;
    let hour;
    minute = time.minute;
    if (minute.toString().length === 1) {
      minute = '00';
    }

    hour = time.hour;
    if (hour.toString().length === 1) {
      hour = '0' + hour;
    }

    return hour + ':' + minute;
  }

  ngOnInit() {
    this.eventToBeEdited = new CalendarEvent();
    let event = this.roomReservationService.getEventToBeEdited();
    event = this.roomReservationService.getProgrammedEvents().filter(e => +e.id === event.id)[0];

    this.eventToBeEdited.id = +event.id;
    this.eventToBeEdited.start = event.start;
    this.eventToBeEdited.end = event.end;
    this.eventToBeEdited.title = event.title;
    this.eventToBeEdited.color = event.color;
    this.eventToBeEdited.actions = event.actions;


    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.eventTypes = this.roomReservationService.getEventTypes();
    this.venues = this.roomReservationService.getVenues();
    this.availableResources = this.roomReservationService.getAvailableResources();

    this.firstFormGroup = this.reservationForm.group({
      reservationDate: ['', Validators.required],
      reservationStartForm: ['', Validators.compose([
        Validators.required,
        (control: FormControl) => this.validateTime(control)
      ])]
    });
    this.secondFormGroup = this.reservationForm.group({
      reservationEndForm: ['', Validators.compose([
        Validators.required,
        (control: FormControl) => this.validateTime(control)
      ])]
    });
    this.thirdFormGroup = this.reservationForm.group({
      eventTypeForm: ['', Validators.required],
      venueForm: ['', Validators.required],
      resourceForm: ['', Validators.required]
    });


    this.startPickerTime = {
      hour: this.eventToBeEdited.start.getHours(),
      minute: this.eventToBeEdited.start.getMinutes()
    };

    this.endPickerTime = {
      hour: this.eventToBeEdited.end.getHours(),
      minute: this.eventToBeEdited.end.getMinutes()
    };

    this.reservationDate.setValue(this.eventToBeEdited.start);
    this.reservationStartForm.setValue(this.startPickerTime);
    this.reservationEndForm.setValue(this.endPickerTime);

    const title = this.eventToBeEdited.title.split('<br>');

    this.eventType = this.roomReservationService.getEventTypes().filter(e => e.name === title[1].trim())[0];
    this.venue = this.roomReservationService.getVenues().filter(v => v.name === title[2].trim())[0];
    const usedResources = this.roomReservationService.getUsedResources().filter(r => r.eventId === this.eventToBeEdited.id);

    for (const res of usedResources) {
      this.resources.push(this.roomReservationService.getAvailableResources().filter(r => r.id === res.resourceId)[0]);
    }

    this.eventTypeForm.setValue(this.eventType);
    this.venueForm.setValue(this.venue);
    this.resourceForm.setValue(this.resources);

    const events = this.roomReservationService.getProgrammedEvents().filter(e => +this.eventToBeEdited.id === +e.id);
    this.recurrent = events.length > 1;

    this.selectedResources = this.resources;
  }

  ngAfterViewChecked(): void {

    this.restrictStartTimeOnTimePicker();
    this.transformStartPickTimeToString();
    this.restrictEndTimeOnTimePicker();
  }

  setHourAndMinutesToDate(date: Date, control: AbstractControl) {
    date.setHours(control.value.hour);
    date.setMinutes(control.value.minute);
  }

  editReservation() {

    const eventDate = new Date(this.reservationDate.value);
    const event = new CalendarEvent();

    this.setHourAndMinutesToDate(eventDate, this.reservationStartForm);
    event.start = new Date(eventDate);
    event.id = this.eventToBeEdited.id;

    this.setHourAndMinutesToDate(eventDate, this.reservationEndForm);
    event.end = new Date(eventDate);
    event.title = '<br> ' + this.eventTypeForm.value.name + '<br> ' + this.venueForm.value.name;
    event.actions = this.roomReservationService.getActions();

    switch (this.eventTypeForm.value.name) {
      case 'Course':
        event.color = colors.yellow;
        break;
      case 'Conference':
        event.color = colors.red;
        break;
      default:
        event.color = colors.blue;
        break;
    }

    const startTime = EditRoomReservationSmartComponent.transformTimeToString(this.reservationStartForm.value);
    const endTime = EditRoomReservationSmartComponent.transformTimeToString(this.reservationEndForm.value);
    let reservationDate = this.roomReservationService.transformDate(this.reservationDate.value);

    const usedResources = this.roomReservationService.getUsedResources().filter(r => r.eventId !== event.id);
    this.roomReservationService.setUsedResources(usedResources);
    this.setUsedResources(reservationDate, startTime, endTime, event.id);

    if (this.recurrent) {

      this.modifyOriginalEvent(event);

      for (let i = 1; i < 7; i++) {

        const copy = {...event};
        this.setHourAndMinutesToDate(eventDate, this.reservationStartForm);
        copy.start = addDays(new Date(eventDate), i * 7);

        this.setHourAndMinutesToDate(eventDate, this.reservationEndForm);
        copy.end = addDays(new Date(eventDate), i * 7);

        reservationDate = this.roomReservationService.transformDate(addDays(this.reservationDate.value, i * 7));
        this.setUsedResources(reservationDate, startTime, endTime, event.id);

        this.roomReservationService.getProgrammedEvents().push(copy);
      }
    } else {
      this.modifyOriginalEvent(event);
    }

    this.router.navigate(['room-reservation']);
  }

  modifyOriginalEvent(event: CalendarEvent) {

    const events = this.roomReservationService.getProgrammedEvents().filter(e => +e.id !== event.id);
    this.roomReservationService.setCalendarEvents(events);
    this.roomReservationService.getProgrammedEvents().push(event);
  }

  private transformStartPickTimeToString() {

    if (this.reservationStartForm.value) {
      let hour;
      let minute;
      let addHour = 0;
      if (this.reservationStartForm.value.minute === 60) {
        this.reservationStartForm.value.minute = 0;
      }

      minute = this.reservationStartForm.value.minute + 15;
      if (minute === 60) {
        minute = '00';
        addHour = 1;
      }

      hour = this.reservationStartForm.value.hour + addHour;
      if (hour.toString().length === 1) {
        hour = '0' + hour;
      }

      this.startTime = hour + ':' + minute;
      this.cdRef.detectChanges();
    }
  }

  private restrictStartTimeOnTimePicker() {

    if (this.reservationStartForm.value && this.reservationStartForm.value.hour < 8) {
      const modifiedStartTime = this.reservationStartForm.value;
      modifiedStartTime.hour = 8;
      this.reservationStartForm.setValue(modifiedStartTime);
      this.cdRef.detectChanges();
    }

    if (this.reservationStartForm.value && this.reservationStartForm.value.hour > 20) {
      const modifiedStartTime = this.reservationStartForm.value;
      modifiedStartTime.hour = 20;
      this.reservationStartForm.setValue(modifiedStartTime);
      this.cdRef.detectChanges();
    }
  }

  private restrictEndTimeOnTimePicker() {
    if (this.reservationEndForm.value && (this.reservationEndForm.value.hour < 8 ||
      this.reservationEndForm.value.hour <= this.reservationStartForm.value.hour)) {
      const modifiedEndTime = this.reservationEndForm.value;
      if (this.reservationEndForm.value.hour <= this.reservationStartForm.value.hour) {
        if (this.reservationStartForm.value.minute + 15 === 60) {
          modifiedEndTime.hour = this.reservationStartForm.value.hour + 1;
          modifiedEndTime.minute = 0;
        } else {
          modifiedEndTime.hour = this.reservationStartForm.value.hour;
          if (this.reservationStartForm.value.minute >= this.reservationEndForm.value.minute) {
            modifiedEndTime.minute = this.reservationStartForm.value.minute + 15;
          }
        }
      } else {
        modifiedEndTime.hour = 8;
      }

      this.reservationEndForm.setValue(modifiedEndTime);
      this.cdRef.detectChanges();
    }

    if (this.reservationEndForm.value && this.reservationEndForm.value.hour > 20) {
      const modifiedEndTime = this.reservationEndForm.value;
      modifiedEndTime.hour = 21;
      modifiedEndTime.minute = 0;
      this.reservationEndForm.setValue(modifiedEndTime);
      this.cdRef.detectChanges();
    }
  }

  validateTime(control: FormControl): { [key: string]: boolean } {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 8) {
      return {tooEarly: true};
    }
    if (value.hour > 21) {
      return {tooLate: true};
    }

    return null;
  }


  changeRecurrence() {
    this.recurrent = !this.recurrent;
  }

  private setUsedResources(reservationDate: string, startTime: string, endTime: string, eventId: number) {

    if (this.selectedResources) {
      for (const resource of this.selectedResources) {
        const usedResource = new ResourceEvent();
        usedResource.name = resource.name;
        usedResource.date = reservationDate + ' ' + startTime + ' - ' + endTime;
        usedResource.eventId = eventId;
        usedResource.resourceId = resource.id;
        this.roomReservationService.getUsedResources().push(usedResource);
      }
    }
  }
}
