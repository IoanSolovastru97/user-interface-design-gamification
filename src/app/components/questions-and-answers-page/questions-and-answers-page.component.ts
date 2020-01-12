import { Component, OnInit, Input } from '@angular/core';
import { CourseCard } from '../../core/models/course-card';

@Component({
  selector: 'app-questions-and-answers-page',
  templateUrl: './questions-and-answers-page.component.html',
  styleUrls: ['./questions-and-answers-page.component.css']
})
export class QuestionsAndAnswersPageComponent implements OnInit {

  @Input() course: CourseCard;

  constructor() { }

  ngOnInit() {
  }

  title = 'Angular Chatroom';
  messages = [];
  users = ['Nelu','Andreea','Ioana','Narcisa','Flavius'];
  currentUser: any;

  _username: string = '';
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }

  _message: string = '';
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  sendMessage() {
    const { message, currentUser } = this;
    currentUser.sendMessage({
      text: message,
      roomId: '<your room id>',
    });
    this.message = '';
  }

  // addUser() {
  //   const { username } = this;
  //   axios.post('http://localhost:5200/users', { username })
  //     .then(() => {
  //       const tokenProvider = new Chatkit.TokenProvider({
  //         url: 'http://localhost:5200/authenticate'
  //       });

  //       const chatManager = new Chatkit.ChatManager({
  //         instanceLocator: '<your instance locator>',
  //         userId: username,
  //         tokenProvider
  //       });

  //       return chatManager
  //         .connect()
  //         .then(currentUser => {
  //           currentUser.subscribeToRoom({
  //             roomId: '<your room id>',
  //             messageLimit: 100,
  //             hooks: {
  //               onMessage: message => {
  //                 this.messages.push(message);
  //               },
  //               onPresenceChanged: (state, user) => {
  //                 this.users = currentUser.users.sort((a, b) => {
  //                   if (a.presence.state === 'online') return -1;

  //                   return 1;
  //                 });
  //               },
  //             },
  //           });

  //           this.currentUser = currentUser;
  //           this.users = currentUser.users;
  //         });
  //     })
  //       .catch(error => console.error(error))
  // }
}
