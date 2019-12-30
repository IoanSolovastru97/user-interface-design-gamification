import {Injectable} from '@angular/core';
import {ResourceEvent} from '../models/resource-event';
import {CalendarEvent} from 'calendar-utils';
import {addDays, addHours, startOfDay} from 'date-fns';
import {EventType} from '../models/event-type';
import {Venue} from '../models/venue';
import {Resource} from '../models/resource';
import {CalendarEventAction} from 'angular-calendar';

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

@Injectable({
  providedIn: 'root'
})
export class RoomReservationService {

  startDate1: Date = addHours(addDays(startOfDay(new Date()), 1), 8);
  endDate1: Date = addHours(addDays(startOfDay(new Date()), 1), 12);

  startDate2: Date = addHours(startOfDay(new Date()), 8);
  endDate2: Date = addHours(startOfDay(new Date()), 18);

  usedResources: ResourceEvent[] = [
    {name: 'Microphone', date: this.transformDate(this.startDate2) + ' 08:00 - 18:00', eventId: 2, resourceId: 1},
    {name: 'Marker', date: this.transformDate(this.startDate2) + ' 08:00 - 18:00', eventId: 2, resourceId: 6},
    {name: 'Sponge', date: this.transformDate(this.startDate2) + ' 08:00 - 18:00', eventId: 2, resourceId: 5},
    {name: 'Microphone', date: this.transformDate(this.startDate1) + ' 08:00 - 12:00', eventId: 1, resourceId: 2},
    {name: 'Speakers', date: this.transformDate(this.startDate1) + ' 08:00 - 12:00', eventId: 1, resourceId: 3},
    {name: 'Projector', date: this.transformDate(this.startDate1) + ' 08:00 - 12:00', eventId: 1, resourceId: 4}
  ];

  eventTypes: EventType[] = [
    {name: 'Course', description: 'The course has the lowest priority!'},
    {name: 'Conference', description: 'The conference has the highest priority!'}
  ];

  venues: Venue[] = [
    {name: 'Room 12', description: 'Very spacious room, suited for conferences'},
    {name: 'Room 45', description: 'Casual room for courses'},
    {name: 'Room 82', description: 'Room suited for all event types'},
  ];

  availableResources: Resource[] = [
    {id: 1, name: 'Microphone'},
    {id: 2, name: 'Microphone'},
    {id: 3, name: 'Speakers'},
    {id: 4, name: 'Projector'},
    {id: 5, name: 'Sponge'},
    {id: 6, name: 'Marker'},
    {id: 7, name: 'Chalk'}
  ];

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent.id !== event.id);
        this.usedResources = this.usedResources.filter(r => r.eventId !== event.id);
      }
    }
  ];

  eventToBeEdited: CalendarEvent;

  events: CalendarEvent[] = [
    {
      id: +1,
      start: this.startDate1,
      end: this.endDate1,
      title: '<br> Conference <br> Room 45',
      color: colors.red,
      actions: this.actions
    },
    {
      id: +2,
      start: this.startDate2,
      end: this.endDate2,
      title: '<br> Course <br> Room 12',
      color: colors.yellow,
      actions: this.actions
    }
  ];


  transformDate(value: Date): string {
    if (!value) {
      return '';
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    return value.getDate() + this.nthDate(value.getDate()) + ' ' + months[value.getMonth()];
  }

  nthDate(d) {
    if (d > 3 && d < 21) {
      return 'th';
    }
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  constructor() {
  }

  getUsedResources(): ResourceEvent[] {
    return this.usedResources;
  }

  getProgrammedEvents(): CalendarEvent[] {
    return this.events;
  }

  getEventTypes(): EventType[] {
    return this.eventTypes;
  }

  getVenues(): Venue[] {
    return this.venues;
  }

  getAvailableResources(): Resource[] {
    return this.availableResources;
  }

  getActions(): CalendarEventAction[] {
    return this.actions;
  }

  getEventToBeEdited(): CalendarEvent {
    return this.eventToBeEdited;
  }

  setEventToBeEdited(event: CalendarEvent): void {
    this.eventToBeEdited = event;
  }

  setCalendarEvents(events: CalendarEvent[]): void {
    this.events = events;
  }

  setUsedResources(resources: ResourceEvent[]): void {
    this.usedResources = resources;
  }
}
