import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'app-login-page-smart',
  templateUrl: './login-page-smart.component.html',
  styleUrls: ['./login-page-smart.component.css']
})
export class LoginPageSmartComponent implements OnInit {

  form: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
  }


  ngOnInit() {
    this.form = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onLogin() {
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;


    const user = this.authService.onLogin(username, password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.authService.user = user;
      this.router.navigateByUrl('home');
    } else {
      this.error = 'Login credentials are wrong!';
    }
  }
}


