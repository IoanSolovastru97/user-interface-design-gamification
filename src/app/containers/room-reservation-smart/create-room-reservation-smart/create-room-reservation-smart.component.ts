import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe, formatDate} from '@angular/common';
import {Router} from '@angular/router';
import {RoomReservationService} from '../../../core/services/room-reservation.service';
import {CalendarEvent} from '../../../core/models/calendar-event';
import {EventType} from '../../../core/models/event-type';
import {Venue} from '../../../core/models/venue';
import {Resource} from '../../../core/models/resource';
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
  selector: 'app-create-room-reservation-smart',
  templateUrl: './create-room-reservation-smart.component.html',
  styleUrls: ['./create-room-reservation-smart.component.css'],
  providers: [DatePipe]
})
export class CreateRoomReservationSmartComponent implements OnInit, AfterViewChecked {

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
      venueForm: ['', Validators.required]
    });

  }

  ngAfterViewChecked(): void {

    this.restrictStartTimeOnTimePicker();
    this.transformStartPickTimeToString();
    this.restrictEndTimeOnTimePicker();
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

  setHourAndMinutesToDate(date: Date, control: AbstractControl) {
    date.setHours(control.value.hour);
    date.setMinutes(control.value.minute);
  }

  createReservation() {

    const eventDate = new Date(this.reservationDate.value);
    const event = new CalendarEvent();

    event.id = +this.roomReservationService.getProgrammedEvents()[this.roomReservationService.getProgrammedEvents().length - 1].id + 1;
    this.setHourAndMinutesToDate(eventDate, this.reservationStartForm);
    event.start = new Date(eventDate);

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

    const startTime = CreateRoomReservationSmartComponent.transformTimeToString(this.reservationStartForm.value);
    const endTime = CreateRoomReservationSmartComponent.transformTimeToString(this.reservationEndForm.value);
    let reservationDate = this.roomReservationService.transformDate(this.reservationDate.value);

    this.setUsedResources(reservationDate, startTime, endTime, event.id);

    this.roomReservationService.getProgrammedEvents().push(event);

    if (this.recurrent) {
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
    }
    this.router.navigate(['room-reservation']);
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
