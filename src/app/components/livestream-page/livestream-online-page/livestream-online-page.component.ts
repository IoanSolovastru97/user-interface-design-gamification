import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-livestream-online-page',
  templateUrl: './livestream-online-page.component.html',
  styleUrls: ['./livestream-online-page.component.css']
})
export class LivestreamOnlinePageComponent implements OnInit {

  @Output()
  endSession: EventEmitter<any> = new EventEmitter();
  @Output()
  debateTime: EventEmitter<any> = new EventEmitter();
  @Output()
  miniGame: EventEmitter<any> = new EventEmitter();
  @Output()
  voteUp: EventEmitter<any> = new EventEmitter();
  @Output()
  voteDown: EventEmitter<any> = new EventEmitter();
  @Input()
  countVotesUp: number;
  @Input()
  countVotesDown: number;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
