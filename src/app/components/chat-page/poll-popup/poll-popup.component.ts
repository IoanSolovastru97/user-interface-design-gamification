import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-poll-popup',
  templateUrl: './poll-popup.component.html',
  styleUrls: ['./poll-popup.component.css']
})
export class PollPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PollPopupComponent>){}

  ngOnInit() {
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
