import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CourseCard} from '../../core/models/course-card';
import {CoursesService} from '../../core/services/courses.service';

@Component({
  selector: 'app-courses-enrollment',
  templateUrl: './courses-enrollment.component.html',
  styleUrls: ['./courses-enrollment.component.css']
})
export class CoursesEnrollmentComponent implements OnInit {

  courses: CourseCard[];

  @Output() viewCourse: EventEmitter<CourseCard> = new EventEmitter<CourseCard>();

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getMoreCourses();
  }

  sendCourse(course: CourseCard) {
    this.viewCourse.emit(course);
    console.log(course);
  }
}
