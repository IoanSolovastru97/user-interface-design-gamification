import {Injectable} from '@angular/core';
import {AppConfig} from '../../app.config';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUser: User = null;

  users: User[] = [
    {userId: 1, username: 'student1', password: 'student1', role: 'STUDENT'},
    {userId: 2, username: 'student2', password: 'student2', role: 'STUDENT'},
    {userId: 3, username: 'prof1', password: 'prof1', role: 'PROFESSOR'},
    {userId: 4, username: 'guest1', password: 'guest1', role: 'GUEST'}
  ];

  constructor() {
  }

  set user(user: User) {
    this.authUser = user;
  }

  get user() {
    return this.authUser || JSON.parse(localStorage.getItem('user'));
  }

  onLogin(username: string, password: string) {

    for (const user of this.users) {
      if (user.username === username && user.password === password) {
        return user;
      }
    }

    return null;
  }

  logout() {
    localStorage.removeItem('user');
    this.user = null;
  }

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  get isStudent(): boolean {
    return this.user.role.includes(AppConfig.ROLE_STUDENT);
  }

  get isProfessor(): boolean {
    return this.user.role.includes(AppConfig.ROLE_PROFESSOR);
  }

  get isGuest(): boolean {
    return this.user.role.includes(AppConfig.ROLE_GUEST);
  }

  get getUsers(): User[] {
    return this.users;
  }
}
