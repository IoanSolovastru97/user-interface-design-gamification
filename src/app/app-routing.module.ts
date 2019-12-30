import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageSmartComponent} from './containers/home-page-smart/home-page-smart.component';
import {BibliographyPageSmartComponent} from './containers/bibliography-page-smart/bibliography-page-smart.component';
import {LoginPageSmartComponent} from './containers/login-page-smart/login-page-smart.component';
import {ChatPageSmartComponent} from './containers/chat-page-smart/chat-page-smart.component';
import {CoursesPageSmartComponent} from './containers/courses-page-smart/courses-page-smart.component';
import {BookPageSmartComponent} from './containers/book-page-smart/book-page-smart.component';
import {CoursePageSmartComponent} from './containers/course-page-smart/course-page-smart.component';
import {QuizPageSmartComponent} from './containers/quiz-page-smart/quiz-page-smart.component';
import {QuizCheckPageSmartComponent} from './containers/quiz-check-page-smart/quiz-check-page-smart.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageSmartComponent},
  {path: 'home', component: HomePageSmartComponent},
  {path: 'courses', component: CoursesPageSmartComponent},
  {path: 'chat', component: ChatPageSmartComponent},
  {path: 'course/:name', component: CoursePageSmartComponent},
  {path: 'course/:name/bibliography', component: BibliographyPageSmartComponent},
  {path: 'book/:title', component: BookPageSmartComponent},
  {path: 'course/:name/quiz', component: QuizPageSmartComponent},
  {path: 'quiz-check', component: QuizCheckPageSmartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
