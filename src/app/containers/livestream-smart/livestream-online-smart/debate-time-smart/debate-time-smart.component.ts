import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-debate-time-smart',
  templateUrl: './debate-time-smart.component.html',
  styleUrls: ['./debate-time-smart.component.css']
})
export class DebateTimeSmartComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  endDebate() {
    this.router.navigate(['livestream/on']);
  }

}
