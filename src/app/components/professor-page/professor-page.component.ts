import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-page',
  templateUrl: './professor-page.component.html',
  styleUrls: ['./professor-page.component.css']
})
export class ProfessorPageComponent implements OnInit {

  icons = ['angry', 'tired', 'grimace', 'smile-beam', 'grin-hearts'];
  selectedIcon = '';
  displayedIcon = 'smile-beam';
  constructor() { }

  ngOnInit() {
  }

  selectIcon( newSelectedIcon) {
    console.log('choosen ' + newSelectedIcon);
    this.selectedIcon = newSelectedIcon;
    console.log('set to ' + this.selectedIcon);
  }

  getDisplayedIcon(index) {
    return this.icons[index];
  }

  submit() {
    this.displayedIcon = this.selectedIcon;  // aici se updateaza iconul la cel selectat recent
    console.log('submit is pressed');
  }
}
