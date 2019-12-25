import { Component, OnInit } from '@angular/core';
import {CourseCard} from '../../core/models/course-card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses-page-smart',
  templateUrl: './courses-page-smart.component.html',
  styleUrls: ['./courses-page-smart.component.css']
})
export class CoursesPageSmartComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onViewCourse(course: CourseCard) {
    this.router.navigateByUrl('course/' + course.name);
  }

  logout() {
    this.router.navigateByUrl('login');
  }

}
