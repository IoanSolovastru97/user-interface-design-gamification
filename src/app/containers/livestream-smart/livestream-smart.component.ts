import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';
import {AppConfig} from '../../app.config';

@Component({
  selector: 'app-livestream-smart',
  templateUrl: './livestream-smart.component.html',
  styleUrls: ['./livestream-smart.component.css']
})
export class LivestreamSmartComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
    if (this.authService.user.role !== AppConfig.ROLE_PROFESSOR) {
      this.router.navigate(['livestream/on']);
    }
  }

  createNewSession() {
    this.router.navigate(['livestream/on']);
  }
}
