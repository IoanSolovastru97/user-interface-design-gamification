import { Component, OnInit } from '@angular/core';
import {CourseCard} from '../../core/models/course-card';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../../core/services/courses.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-course-page-smart',
  templateUrl: './course-page-smart.component.html',
  styleUrls: ['./course-page-smart.component.css']
})
export class CoursePageSmartComponent implements OnInit {

  course_name: string;
  course: CourseCard;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService ,private router: Router ) {

  }

  ngOnInit() {
    this.course_name = this.route.snapshot.paramMap.get('name');
    let courses = this.coursesService.getAllCourses();
    for( let i = 0 ; i < courses.length; i++){
      if ( this.course_name == courses[i].name) {
          this.course = courses[i];
      }
    }
  }

  logout() {
    this.router.navigateByUrl('login');
  }


}
