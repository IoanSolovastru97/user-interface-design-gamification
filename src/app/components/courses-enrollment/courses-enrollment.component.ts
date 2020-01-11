import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CourseCard} from '../../core/models/course-card';
import {CoursesService} from '../../core/services/courses.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses-enrollment',
  templateUrl: './courses-enrollment.component.html',
  styleUrls: ['./courses-enrollment.component.css']
})
export class CoursesEnrollmentComponent implements OnInit {

  courses: CourseCard[];
  creditsToFullFill = 30;
  chosenCredits = 0;
  tooMany = false;

  popoverIsVisible = false;

  @Output() viewCourse: EventEmitter<CourseCard> = new EventEmitter<CourseCard>();

  constructor(private coursesService: CoursesService,  private router: Router) { }

  ngOnInit() {
    this.courses = this.coursesService.getMoreCourses();
  }

  sendCourse(course: CourseCard) {
    this.viewCourse.emit(course);
    console.log(course);
  }


  enroll() {
    if (this.chosenCredits === this.creditsToFullFill) {
       this.router.navigateByUrl('courses');
    }
  }

  selectCourse(course) {
    if (!course.isLocked && !course.isCompleted) {
      if (this.chosenCredits + course.numberOfCredits > this.creditsToFullFill) {
        this.tooMany = true;
      } else {
        this.chosenCredits = this.chosenCredits + course.numberOfCredits;
        this.tooMany = false;

      }
    }
  }

  showPopover(course) {
    console.log('showPopover');
    course.popoverIsVisible = true;
  }

  hidePopover(course) {
    console.log('hidePopover');
    course.popoverIsVisible = false;
  }
}
