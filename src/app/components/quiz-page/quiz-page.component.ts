import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  questionsToBeAnswered = 5;
  count = 0;
  finishQuiz = false;
  timeLeft = 6000;
  initialTime = 6000;
  interval;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.startTimer();
  }

  remove(btnId) {
    const property = document.getElementById(btnId);
    console.log(document.getElementById(btnId));
    document.getElementById(btnId).style.display = 'none';
    this.count++;
    if (this.count === this.questionsToBeAnswered) {
      this.finishQuiz = true;
      console.log(this.finishQuiz);
    }
  }

  checkIfFinished() {
    if (this.finishQuiz === true) {
      this.router.navigateByUrl('quiz-check');
    }
  }


  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = this.initialTime;
      }
    }, 1000);
  }

}
