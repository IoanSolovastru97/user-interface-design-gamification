export class CalendarEvent {
  id: number;
  start: Date;
  end: Date;
  title: string;
  color: {
    primary: string,
    secondary: string
  };
  actions: any;
}
