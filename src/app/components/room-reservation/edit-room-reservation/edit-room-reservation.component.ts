import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CalendarEvent} from '../../../core/models/calendar-event';
import {Venue} from '../../../core/models/venue';
import {EventType} from '../../../core/models/event-type';
import {Resource} from '../../../core/models/resource';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-room-reservation',
  templateUrl: './edit-room-reservation.component.html',
  styleUrls: ['../create-room-reservation/create-room-reservation.component.css']
})
export class EditRoomReservationComponent implements OnInit {

  isEditable = false;
  stepThreeLabel = 'Choose venue, resources, event type and recurrence';

  @Input()
  eventToBeEdited: CalendarEvent;
  @Input()
  venue: Venue;
  @Input()
  eventType: EventType;
  @Input()
  resources: Resource[];
  @Input()
  firstFormGroup: FormGroup;
  @Input()
  secondFormGroup: FormGroup;
  @Input()
  thirdFormGroup: FormGroup;
  @Input()
  todayDate: string;
  @Input()
  startTime: string;
  @Input()
  eventTypes: EventType[];
  @Input()
  venues: Venue[];
  @Input()
  availableResources: Resource[];
  @Input()
  selectedResources: Resource[];
  @Input()
  recurrent = false;
  @Output()
  editReservation: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  changeRecurrence: EventEmitter<any> = new EventEmitter<any>();


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

  compareResources(resourceSelector: Resource, resource: Resource): boolean {
    return resourceSelector.id === resource.id;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
