import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BibliographyBook} from '../../core/models/bibliography_book';
import {CourseCard} from '../../core/models/course-card';
import {BibliographyService} from '../../core/services/bibliography.service';

@Component({
  selector: 'app-bibliography-page',
  templateUrl: './bibliography-page.component.html',
  styleUrls: ['./bibliography-page.component.css']
})
export class BibliographyPageComponent implements OnInit {

  books: BibliographyBook[];
  @Input() course: CourseCard;
  @Output() viewBook: EventEmitter<BibliographyBook> = new EventEmitter<BibliographyBook>();

  constructor(private bibligraphyService: BibliographyService) {
  }

  ngOnInit() {
    this.books = this.bibligraphyService.getAllBooks();
  }

  sendBook(book: BibliographyBook) {
    this.viewBook.emit(book)
    console.log(book);

  }

}
