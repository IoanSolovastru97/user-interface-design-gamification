import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-livestream-smart',
  templateUrl: './livestream-smart.component.html',
  styleUrls: ['./livestream-smart.component.css']
})
export class LivestreamSmartComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  createNewSession() {
    this.router.navigate(['livestream/on']);
  }
}
