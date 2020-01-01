import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../../core/services/auth.service';

@Component({
  selector: 'app-debate-time-page',
  templateUrl: './debate-time-page.component.html',
  styleUrls: ['./debate-time-page.component.css']
})
export class DebateTimePageComponent implements OnInit {

  @Output()
  endDebate: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

}
