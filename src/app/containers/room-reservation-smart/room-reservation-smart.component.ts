import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  AfterViewChecked, ChangeDetectorRef
} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent} from 'angular-calendar';
import {Router} from '@angular/router';
import {ResourceEvent} from '../../core/models/resource-event';
import {RoomReservationService} from '../../core/services/room-reservation.service';


@Component({
  selector: 'app-room-reservation-smart',
  templateUrl: './room-reservation-smart.component.html',
  styleUrls: ['./room-reservation-smart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RoomReservationSmartComponent implements OnInit, AfterViewChecked {

  constructor(
    private modal: NgbModal,
    private router: Router,
    private roomReservationService: RoomReservationService,
    private cdRef: ChangeDetectorRef) {
  }

  resources = [] as ResourceEvent[];
  events = [] as CalendarEvent[];

  ngOnInit(): void {
    this.resources = this.roomReservationService.getUsedResources();
    this.events = this.roomReservationService.getProgrammedEvents();
  }

  createReservation() {
    this.router.navigate(['room-reservation/create']);
  }

  ngAfterViewChecked(): void {

    this.events = this.roomReservationService.getProgrammedEvents();
    this.resources = this.roomReservationService.getUsedResources();
    this.cdRef.detectChanges();
  }

  handleEvent(event: CalendarEvent): void {

    console.log(event);
    this.roomReservationService.setEventToBeEdited(event);
    this.router.navigate(['room-reservation/' + +event.id]);
  }
}
