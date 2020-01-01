import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user-interface-design-gamification';

  constructor(private router: Router,
              private authService: AuthService) {
  }

  /* ngAfterViewChecked() {
     this.user = sessionStorage.getItem('user');
     this.cdRef.detectChanges();
   }*/

  ngOnInit() {

  }

  logout() {

    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
