import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CourseCard} from '../../core/models/course-card';
import {CoursesService} from '../../core/services/courses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  courses: CourseCard[];

  @Output() viewCourse: EventEmitter<CourseCard> = new EventEmitter<CourseCard>();

  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit() {
    this.courses = this.coursesService.getAllCourses();
  }

  sendCourse(course: CourseCard) {
    this.viewCourse.emit(course);
    console.log(course);
  }
}
