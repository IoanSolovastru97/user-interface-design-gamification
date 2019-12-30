import {Component, Input, OnInit} from '@angular/core';
import {BibliographyBook} from '../../core/models/bibliography_book';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  @Input() book: BibliographyBook;

  constructor() {
  }

  ngOnInit() {
  }

}
