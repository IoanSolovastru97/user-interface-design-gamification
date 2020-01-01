import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../../core/models/user';
import {AuthService} from '../../../core/services/auth.service';

export class UserVoted {
  votedUp: boolean;
  votedDown: boolean;
  user: User;
}

@Component({
  selector: 'app-livestream-online-smart',
  templateUrl: './livestream-online-smart.component.html',
  styleUrls: ['./livestream-online-smart.component.css']
})
export class LivestreamOnlineSmartComponent implements OnInit {

  countVotesUp = 0;
  countVotesDown = 0;
  userVoted: UserVoted;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.userVoted = new UserVoted();
    this.userVoted.user = this.authService.user;
    this.userVoted.votedDown = false;
    this.userVoted.votedUp = false;
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
    if (this.userVoted.votedDown) {
      this.countVotesDown++;
      this.countVotesUp++;
      this.userVoted.votedUp = true;
      this.userVoted.votedDown = false;
    } else {
      if (!this.userVoted.votedUp) {
        this.countVotesUp++;
        this.userVoted.votedUp = true;
        this.userVoted.votedDown = false;
      }
    }
  }


  voteDown() {

    if (this.userVoted.votedUp) {
      this.countVotesDown--;
      this.countVotesUp--;
      this.userVoted.votedUp = false;
      this.userVoted.votedDown = true;
    } else {
      if (!this.userVoted.votedDown) {
        this.countVotesDown--;
        this.userVoted.votedUp = false;
        this.userVoted.votedDown = true;
      }
    }
  }
}
