import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mini-game-smart',
  templateUrl: './mini-game-smart.component.html',
  styleUrls: ['./mini-game-smart.component.css']
})
export class MiniGameSmartComponent implements OnInit {

  participants = [
    {name: 'Spanju Gahahaha', badge: ''},
    {name: 'Lily-Grachie', badge: ''},
    {name: 'Leon', badge: ''},
    {name: 'Rick', badge: ''},
    {name: 'Joseph', badge: ''},

  ];

  goBack() {
    this.router.navigate(['livestream/on']);
  }

  beautifyWord(optionString: any) {
    return optionString.replace(/([A-Z])/g, ' $1').trim();
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
