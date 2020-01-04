import {Injectable} from '@angular/core';
import {CourseCard} from '../models/course-card';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: CourseCard[] = [
    {
      name: "User Interface Design",
      cover: "https://miro.medium.com/max/2500/1*4583XDHQVv36aSvgw4eRwg.png",
      progress: 30,
      mainTeacher: "Dorian Gorgan",
      secondTeacher: "Teodor Stefanut",
      thirdTeacher: "Crinela Potinteu",
      numberOfCredits: 5,
      isLocked: true,
      isCompleted: false
    },
    {
      name: "Artificial Intelligence",
      cover: "https://trotons.com/wp-content/uploads/2019/10/1_thCB4VzqsRapqFCHC8w7EQ.jpeg",
      progress: 56,
      mainTeacher: "Anca Marginean",
      secondTeacher: "Radu Slavescu",
      thirdTeacher: "Adrian Groza",
      numberOfCredits: 5,
      isLocked: false,
      isCompleted: false
    },
    {
      name: "Fundamental Algorithms",
      cover: "https://i.ibb.co/sHBpn3L/Algorithms-1.jpg",
      progress: 70,
      mainTeacher: "Rodica Potolea",
      secondTeacher: "Camelia Lemnaru",
      thirdTeacher: "Vlad Buzea",
      numberOfCredits: 5,
      isLocked: false,
      isCompleted: true
    },
  ];

  moreCourses: CourseCard[] = [
    {
      name: "User Interface Design",
      cover: "https://miro.medium.com/max/2500/1*4583XDHQVv36aSvgw4eRwg.png",
      progress: 30,
      mainTeacher: "Dorian Gorgan",
      secondTeacher: "Teodor Stefanut",
      thirdTeacher: "Crinela Potinteu",
      numberOfCredits: 5,
      isLocked: true,
      isCompleted: false
    },
    {
      name: "Artificial Intelligence",
      cover: "https://trotons.com/wp-content/uploads/2019/10/1_thCB4VzqsRapqFCHC8w7EQ.jpeg",
      progress: 56,
      mainTeacher: "Anca Marginean",
      secondTeacher: "Radu Slavescu",
      thirdTeacher: "Adrian Groza",
      numberOfCredits: 5,
      isLocked: false,
      isCompleted: false
    },
    {
      name: "Fundamental Algorithms",
      cover: "https://i.ibb.co/sHBpn3L/Algorithms-1.jpg",
      progress: 70,
      mainTeacher: "Rodica Potolea",
      secondTeacher: "Camelia Lemnaru",
      thirdTeacher: "Vlad Buzea",
      numberOfCredits: 5,
      isLocked: false,
      isCompleted: true
    },
    {
      name: "Elements of Computer Assisted Graphics",
      cover: "https://miro.medium.com/max/2500/1*4583XDHQVv36aSvgw4eRwg.png",
      progress: 30,
      mainTeacher: "Dorian Gorgan",
      secondTeacher: "Teodor Stefanut",
      thirdTeacher: "Crinela Potinteu",
      numberOfCredits: 5,
      isLocked: false,
      isCompleted: false
    },
    {
      name: "Functional Programming",
      cover: "https://trotons.com/wp-content/uploads/2019/10/1_thCB4VzqsRapqFCHC8w7EQ.jpeg",
      progress: 56,
      mainTeacher: "Radu Slavescu",
      secondTeacher: "Anca Marginean",
      thirdTeacher: "Adrian Groza",
      numberOfCredits: 5,
      isLocked: false,
      isCompleted: false
    },
    {
      name: "Logical Programming",
      cover: "https://i.ibb.co/sHBpn3L/Algorithms-1.jpg",
      progress: 70,
      mainTeacher: "Rodica Potolea",
      secondTeacher: "Camelia Lemnaru",
      thirdTeacher: "Vlad Buzea",
      numberOfCredits: 5,
      isLocked: false,
      isCompleted: false
    },
  ];

  constructor() {
  }

  getAllCourses(): CourseCard[] {
    return this.courses;
  }

  getMoreCourses(): CourseCard[] {
    return this.moreCourses;
  }
}
