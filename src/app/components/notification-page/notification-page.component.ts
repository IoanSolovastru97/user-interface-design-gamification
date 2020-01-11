import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export interface Hour {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})

export class NotificationPageComponent implements OnInit {

  hours: Hour[] = [
    {value: '0', viewValue: '08:00'},
    {value: '1', viewValue: '09:00'},
    {value: '2', viewValue: '10:00'},
    {value: '3', viewValue: '11:00'},
    {value: '4', viewValue: '12:00'},
    {value: '5', viewValue: '13:00'},
    {value: '6', viewValue: '14:00'},
    {value: '7', viewValue: '15:00'},
    {value: '8', viewValue: '16:00'},
    {value: '9', viewValue: '18:00'},
    {value: '10', viewValue: '19:00'},
    {value: '11', viewValue: '20:00'}
  ];

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.info('Notification added');
  }

  formatLabel(value: number) {
    switch(value){
      case 1: return "Very low";
      case 2: return "Low";
      case 3: return "Medium";
      case 4: return "High";
      case 5: return "Very high";
    }
    return "Test";
  }
}
