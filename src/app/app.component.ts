import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewChecked {
  title = 'user-interface-design-gamification';

  user: string;

  constructor(private router: Router,
              private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewChecked() {
    this.user = sessionStorage.getItem('user');
    this.cdRef.detectChanges();
  }

  ngOnInit() {

  }

  logout() {
    this.user = null;
    this.router.navigateByUrl('login');
    sessionStorage.clear();
  }

}
