import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-check-page',
  templateUrl: './quiz-check-page.component.html',
  styleUrls: ['./quiz-check-page.component.css']
})
export class QuizCheckPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToCourses() {
    this.router.navigateByUrl('courses');
  }

  goToProfile() {
    this.router.navigateByUrl('home');
  }

}
