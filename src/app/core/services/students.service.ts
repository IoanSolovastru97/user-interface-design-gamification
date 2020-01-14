import {Injectable} from '@angular/core';
import {Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Student[] = [
    {
      id: 1,
      name: 'Gui Andreea',
      innovation: 90,
      teamwork: 80,
      organization: 57,
      communication: 67
    },
    {
      id: 2,
      name: 'Sirca Narcisa',
      innovation: 85,
      teamwork: 20,
      organization: 40,
      communication: 90
    },
    {
      id: 3,
      name: 'Moldovan Flaviu',
      innovation: 90,
      teamwork: 80,
      organization: 70,
      communication: 44
    },
    {
      id: 4,
      name: 'Onofrei Ioana',
      innovation: 70,
      teamwork: 90,
      organization: 88,
      communication: 67
    },
    {
      id: 5,
      name: 'Solovastru Ioan',
      innovation: 82,
      teamwork: 67,
      organization: 34,
      communication: 67
    },
    {
      id: 6,
      name: 'Pop Ionut Andrei',
      innovation: 45,
      teamwork: 50,
      organization: 27,
      communication: 50
    },
    {
      id: 7,
      name: 'Muresan Ancuta',
      innovation: 32,
      teamwork: 87,
      organization: 27,
      communication: 85
    },
  ];

  constructor() {
  }

  getAllStudents(): Student[] {
    return this.students;
  }
}
