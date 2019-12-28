import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-audio-record-popup',
  templateUrl: './audio-record-popup.component.html',
  styleUrls: ['./audio-record-popup.component.css']
})
export class AudioRecordPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AudioRecordPopupComponent>){}


  ngOnInit() {
  }

  onClick(): void {
    this.dialogRef.close();
  }

}
