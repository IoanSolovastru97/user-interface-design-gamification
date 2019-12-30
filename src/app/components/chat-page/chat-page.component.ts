import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {VideoRecordPopupComponent} from './video-record-popup/video-record-popup.component';
import {AudioRecordPopupComponent} from './audio-record-popup/audio-record-popup.component';
import {PollPopupComponent} from './poll-popup/poll-popup.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {

  @ViewChild('div', null) div: ElementRef;

  message: string;

  constructor(private renderer: Renderer2, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  sendMessage() {

    const img: HTMLImageElement = this.renderer.createElement('img');
    img.src = 'http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png';
    img.alt = 'Avatar';
    img.className = 'right';
    img.style.width = '100%;';

    const p: HTMLParagraphElement = this.renderer.createElement('p');
    p.innerHTML = this.message;

    const span: HTMLSpanElement = this.renderer.createElement('span');
    span.className = 'time-left';
    span.innerText = '11:05';

    const div: HTMLDivElement = this.renderer.createElement('div');
    div.className = 'container darker';

    div.insertAdjacentElement('afterbegin', span);
    div.insertAdjacentElement('afterbegin', p);
    div.insertAdjacentElement('afterbegin', img);

    this.renderer.appendChild(this.div.nativeElement, div);
    this.message = ''

  }

  startVideo(): void {
    const dialogRef = this.dialog.open(VideoRecordPopupComponent, {
      width: '640px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  startAudio():
    void {
    const dialogRef = this.dialog.open(AudioRecordPopupComponent, {
      width: '640px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  startPoll(): void {
    const dialogRef = this.dialog.open(PollPopupComponent, {
      width: '970px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
