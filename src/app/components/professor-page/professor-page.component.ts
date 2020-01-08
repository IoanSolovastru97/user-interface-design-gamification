import { Component, OnInit } from '@angular/core';
import {style} from '@angular/animations';

@Component({
  selector: 'app-professor-page',
  templateUrl: './professor-page.component.html',
  styleUrls: ['./professor-page.component.css']
})
export class ProfessorPageComponent implements OnInit {

  icons = ['angry', 'tired', 'grimace', 'smile-beam', 'grin-hearts'];
  selectedIcon = 'smile-beam';
  displayedIcon = 'smile-beam';

  constructor() {
  }

  ngOnInit() {
  }

  selectIcon(newSelectedIcon) {
    console.log('choosen ' + newSelectedIcon);
    this.selectedIcon = newSelectedIcon;
    console.log('set to ' + this.selectedIcon);

    document.getElementById(newSelectedIcon).style.fontSize = '20px';

    let i = 0;
    for (i = 0; i < 5; i++) {
      if (this.selectedIcon !== this.icons[i]) {
        document.getElementById(this.icons[i]).style.fontSize = '15px';
      }
    }

  }

  getDisplayedIcon(index) {
    return this.icons[index];
  }

  submit() {
    this.displayedIcon = this.selectedIcon;  // aici se updateaza iconul la cel selectat recent
    console.log('submit is pressed');

    // reset the size of the selected icon also
    document.getElementById(this.selectedIcon).style.fontSize = '15px';
  }
}
