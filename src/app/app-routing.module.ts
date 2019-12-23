import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageSmartComponent} from './containers/home-page-smart/home-page-smart.component';
import {LoginPageSmartComponent} from './containers/login-page-smart/login-page-smart.component';
import {CoursesPageSmartComponent} from './containers/courses-page-smart/courses-page-smart.component'

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginPageSmartComponent},
  {path: 'home', component: HomePageSmartComponent},
  {path: 'courses', component: CoursesPageSmartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
