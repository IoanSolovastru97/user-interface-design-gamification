import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule, MatTreeModule,
  MatSnackBarModule,
} from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomePageSmartComponent } from './containers/home-page-smart/home-page-smart.component';
import { LoginPageSmartComponent } from './containers/login-page-smart/login-page-smart.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CoursesPageSmartComponent } from './containers/courses-page-smart/courses-page-smart.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { CoursePageSmartComponent } from './containers/course-page-smart/course-page-smart.component';
import { BibliographyPageComponent } from './components/bibliography-page/bibliography-page.component';
import { BibliographyPageSmartComponent } from './containers/bibliography-page-smart/bibliography-page-smart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HomePageSmartComponent,
    LoginPageSmartComponent,
    CoursesPageComponent,
    CoursesPageSmartComponent,
    CoursePageComponent,
    CoursePageSmartComponent,
    BibliographyPageComponent,
    BibliographyPageSmartComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatCardModule, MatTableModule, MatButtonModule, MatCheckboxModule,
    MatDividerModule, MatIconModule, MatGridListModule, MatListModule, MatSidenavModule, MatDialogModule,
    MatToolbarModule, MatDatepickerModule, MatSelectModule, FormsModule,
    MatNativeDateModule, MatExpansionModule, MatStepperModule, MatChipsModule, MatBadgeModule,
    MatAutocompleteModule, MatProgressSpinnerModule, MatMenuModule, MatTabsModule, MatTreeModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
