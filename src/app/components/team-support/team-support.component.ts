
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Team} from '../../core/models/team';
import {TeamService} from '../../core/services/team.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team-support',
  templateUrl: './team-support.component.html',
  styleUrls: ['./team-support.component.css']
})
export class TeamSupportComponent implements OnInit {

  teams: Team[];

  constructor(private teamService: TeamService, private router: Router) { }

  ngOnInit() {
    this.teams = this.teamService.getAllTeams();
    console.log(this.teams);

  }

  newTeam(team) {
      this.router.navigateByUrl('teamStudents');
  }

  seeCharts() {
    this.router.navigateByUrl('teamCharts');
  }
}
