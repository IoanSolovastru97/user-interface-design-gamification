import {Component, Input, OnInit} from '@angular/core';
import {CourseCard} from '../../core/models/course-card';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {

  selectedFile = null;

  @Input() course: CourseCard;
  isSelectedFile = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.isSelectedFile = true;
    }
  }

  seeBibliography() {
    this.router.navigateByUrl('course/'+this.course.name + '/bibliography');
  }

}
