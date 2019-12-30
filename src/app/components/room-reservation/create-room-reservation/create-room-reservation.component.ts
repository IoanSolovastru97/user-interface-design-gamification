import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EventType} from '../../../core/models/event-type';
import {Venue} from '../../../core/models/venue';
import {Resource} from '../../../core/models/resource';

@Component({
  selector: 'app-create-room-reservation',
  templateUrl: './create-room-reservation.component.html',
  styleUrls: ['./create-room-reservation.component.css']
})
export class CreateRoomReservationComponent implements OnInit {

  isEditable = false;
  stepThreeLabel = 'Choose venue, resources, event type and recurrence';

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
  createReservation: EventEmitter<any> = new EventEmitter<any>();
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

  constructor() {
  }

  ngOnInit() {
  }

}
