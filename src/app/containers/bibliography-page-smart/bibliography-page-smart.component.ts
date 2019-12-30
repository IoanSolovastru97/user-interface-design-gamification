import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseCard} from '../../core/models/course-card';
import {CoursesService} from '../../core/services/courses.service';
import {BibliographyBook} from '../../core/models/bibliography_book';

@Component({
  selector: 'app-bibliography-page-smart',
  templateUrl: './bibliography-page-smart.component.html',
  styleUrls: ['./bibliography-page-smart.component.css']
})
export class BibliographyPageSmartComponent implements OnInit {

  course_name: string;
  course: CourseCard;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) {

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

  onViewBook(book: BibliographyBook) {
    this.router.navigateByUrl('book/' + book.title);

  }

}
