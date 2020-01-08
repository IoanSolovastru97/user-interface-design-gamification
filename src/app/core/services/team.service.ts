import {Injectable} from '@angular/core';
import {Team} from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams: Team[] = [
    {
      name: 'Game in Unity',
      image: 'https://i.udemycdn.com/course/750x422/93962_9cea_8.jpg',
      description: 'Design a small advanced 3D grade A worthy game (Or a prototype). \n' +
        'Cover such topics as Concept design, Graphics, Shaders, Art, Level design, Animation, AI, PhysX, Core systems, ',
      persons: [],
      numberOfPersons: 3,
      innovation: 0,
      teamwork: 0,
      organization: 0,
      communication: 0,
    },
    {
      name: 'Online Medication Platform',
      image: 'https://www.onlineabortionpillrx.com/blog/wp-content/uploads/2018/08/telemedicine-medication-virtual-platform.jpg',
      // tslint:disable-next-line:max-line-length
      description: 'This assignment represents the first module of the distributed software system "Integrated Medical Monitoring Platform for Home-care assistance" that represents the final project for the Distributed Systems course.',
      persons: [],
      numberOfPersons: 3,
      innovation: 0,
      teamwork: 0,
      organization: 0,
      communication: 0,
    },

    {
      name: 'Gamification in teaching activities at university level',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDtMM9zYzR56XkMIgUR7jtVKWQLARKJSdhdDpFtO5_I1Hprd5FQ&s',
      // tslint:disable-next-line:max-line-length
      description: 'This project aims to stimulate the participation of students to the educational process and to propose solutions for an increased awareness on their part. The approach of this project is to include principles from the gamification theory in the recurring teaching activities and to propose simple and efficient management instruments by the teaching staff and the students as well.',
      persons: [],
      numberOfPersons: 3,
      innovation: 0,
      teamwork: 0,
      organization: 0,
      communication: 0,
    },
  ];


  constructor() {
  }

  getAllTeams(): Team[] {
    return this.teams;
  }
}
