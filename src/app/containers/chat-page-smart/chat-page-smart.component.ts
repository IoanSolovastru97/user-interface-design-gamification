import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chat-page-smart',
  templateUrl: './chat-page-smart.component.html',
  styleUrls: ['./chat-page-smart.component.css']
})
export class ChatPageSmartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


}
