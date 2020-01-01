import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-livestream-online-smart',
  templateUrl: './livestream-online-smart.component.html',
  styleUrls: ['./livestream-online-smart.component.css']
})
export class LivestreamOnlineSmartComponent implements OnInit {

  countVotesUp = 3;
  countVotesDown = -10;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  endSession() {
    this.router.navigate(['livestream']);
  }

  debateTime() {
    this.router.navigate(['livestream/on/debate']);
  }

  miniGame() {
    this.router.navigate(['livestream/on/mini-game']);
  }

  voteUp() {
    this.countVotesUp++;
  }

  voteDown() {
    this.countVotesDown--;
  }
}
