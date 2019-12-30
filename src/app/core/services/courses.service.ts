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
      thirdTeacher: "Crinela Potinteu"
    },
    {
      name: "Artificial Intelligence",
      cover: "https://trotons.com/wp-content/uploads/2019/10/1_thCB4VzqsRapqFCHC8w7EQ.jpeg",
      progress: 56,
      mainTeacher: "Anca Marginean",
      secondTeacher: "Radu Slavescu",
      thirdTeacher: "Adrian Groza"
    },
    {
      name: "Fundamental Algorithms",
      cover: "https://i.ibb.co/sHBpn3L/Algorithms-1.jpg",
      progress: 70,
      mainTeacher: "Rodica Potolea",
      secondTeacher: "Camelia Lemnaru",
      thirdTeacher: "Vlad Buzea"
    },
  ];

  constructor() {
  }

  getAllCourses(): CourseCard[] {
    return this.courses;
  }

}
