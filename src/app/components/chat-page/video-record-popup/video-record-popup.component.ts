import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-video-record-popup',
  templateUrl: './video-record-popup.component.html',
  styleUrls: ['./video-record-popup.component.css']
})
export class VideoRecordPopupComponent implements OnInit {

  @ViewChild('video',null)
  public video: ElementRef;

  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<VideoRecordPopupComponent>){}

  onClick(): void {
    this.dialogRef.close();
  }

  public ngAfterViewInit() {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      });
    }
  }
}
