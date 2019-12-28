import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {CometChat} from '@cometchat-pro/chat/CometChat';
import appSettings = CometChat.appSettings;
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'user-interface-design-gamification';

  user : string;

  constructor(private router: Router) {
  }

  ngAfterViewChecked() {
    this.user = sessionStorage.getItem('user');
  }

  ngOnInit() {

  }

  logout() {
    this.user = null;
    this.router.navigateByUrl('login');
  }

}

