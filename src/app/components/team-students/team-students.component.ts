// @ts-ignore
import { Component, OnInit, Router } from '@angular/core';
import {StudentsService} from '../../core/services/students.service';

@Component({
  selector: 'app-team-students',
  templateUrl: './team-students.component.html',
  styleUrls: ['./team-students.component.css']
})
export class TeamStudentsComponent implements OnInit {

  headElements = ['Id', 'Name', 'Innovation', 'Teamwork', 'Organization', 'Communication'];
  students = [];

  constructor(private studentsService: StudentsService, private router: Router) { }

  ngOnInit() {
    this.students = this.studentsService.getAllStudents();
  }

}
