import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseCard} from '../../core/models/course-card';
import {CoursesService} from '../../core/services/courses.service';

@Component({
  selector: 'app-questions-and-answers-page-smart',
  templateUrl: './questions-and-answers-page-smart.component.html',
  styleUrls: ['./questions-and-answers-page-smart.component.css']
})
export class QuestionsAndAnswersPageSmartComponent implements OnInit {

  course_name: string;
  course: CourseCard;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) {

  }

  ngOnInit() {
    this.course_name = this.route.snapshot.paramMap.get('name');
    let courses = this.coursesService.getAllCourses();
    for (let i = 0; i < courses.length; i++) {
      if (this.course_name == courses[i].name) {
        this.course = courses[i];
      }
    }
  }


}
