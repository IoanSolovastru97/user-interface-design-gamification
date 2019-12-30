import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ResourceEvent} from '../../core/models/resource-event';
import {TooltipPosition} from '@angular/material/tooltip';
import {CalendarView} from 'angular-calendar';
import {CalendarEvent} from 'angular-calendar';

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  styleUrls: ['./room-reservation.component.css']
})
export class RoomReservationComponent implements OnInit {

  @Input()
  resources: ResourceEvent[];
  @Input()
  events: CalendarEvent[];
  @Output()
  createReservation: EventEmitter<any> = new EventEmitter();
  @Output()
  handleEvent: EventEmitter<any> = new EventEmitter();

  position = 'above' as TooltipPosition;
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}
