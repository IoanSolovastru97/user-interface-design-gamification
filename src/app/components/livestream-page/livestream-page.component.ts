import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-livestream-page',
  templateUrl: './livestream-page.component.html',
  styleUrls: ['./livestream-page.component.css']
})
export class LivestreamPageComponent implements OnInit {

  @Output()
  createNewSession: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
