import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IconService} from '../../../../core/services/icon.service';
import {Icons} from '../../../../core/models/icons';

@Component({
  selector: 'app-mini-game-page',
  templateUrl: './mini-game-page.component.html',
  styleUrls: ['./mini-game-page.component.css']
})
export class MiniGamePageComponent implements OnInit {

  @Input()
  participants: any;
  @Output()
  goBack: EventEmitter<any> = new EventEmitter();
  @Output()
  beautifyWord: EventEmitter<any> = new EventEmitter();

  icons = Icons;

  constructor(private iconService: IconService) {
  }

  ngOnInit() {
    this.iconService.registerIcons();
  }

  getIcon(index: number) {
    return this.participants[index].badge;
  }
}
