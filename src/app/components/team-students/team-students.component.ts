// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../../core/services/students.service';
import {Router} from '@angular/router';
import {Student} from '../../core/models/student';

@Component({
  selector: 'app-team-students',
  templateUrl: './team-students.component.html',
  styleUrls: ['./team-students.component.css']
})
export class TeamStudentsComponent implements OnInit {

  headElements = ['Sel', 'Id', 'Name', 'Innovation', 'Teamwork', 'Organization', 'Communication'];
  students = [];

  selectedStudentsCount  = 0; /// nu cred ca il mai folosesc de fapt

  studentiClickuiti: Student[] = [    {
    id: 2,
    name: 'Sirca Narcisa',
    innovation: 85,
    teamwork: 20,
    organization: 40,
    communication: 90
  }];

  disable = false;
  constructor(private studentsService: StudentsService, private router: Router) { }

  ngOnInit() {
    this.students = this.studentsService.getAllStudents();
    console.log(this.students);
  }

  studentSelected(el: Student)  {

    if (!this.studentiClickuiti.includes(el)) {
      this.studentiClickuiti.push(el);
      this.selectedStudentsCount += 1;
    } else {
      this.studentiClickuiti.filter(obj => obj !== el);
      this.selectedStudentsCount -= 1;
    }
    // el.style.backgroundColor = 'primary';
    console.log('student ales');
    // this.selectedStudentsCount += 1;
    console.log(this.selectedStudentsCount);
    }

clear() {
    console.log('clear');
    this.studentiClickuiti = [    {
      id: 2,
      name: 'Sirca Narcisa',
      innovation: 85,
      teamwork: 20,
      organization: 40,
      communication: 90
    }];
  }

  completeTeam() {
    this.studentiClickuiti = [    {
      id: 2,
      name: 'Sirca Narcisa',
      innovation: 85,
      teamwork: 20,
      organization: 40,
      communication: 90
    }];
    this.router.navigateByUrl('teamsupport');
  }
}
