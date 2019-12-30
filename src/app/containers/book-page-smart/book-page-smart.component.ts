import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {BibliographyBook} from '../../core/models/bibliography_book';
import {BibliographyService} from '../../core/services/bibliography.service';


@Component({
  selector: 'app-book-page-smart',
  templateUrl: './book-page-smart.component.html',
  styleUrls: ['./book-page-smart.component.css']
})
export class BookPageSmartComponent implements OnInit {
  book_name: string;
  book: BibliographyBook;

  constructor(private route: ActivatedRoute, private bookService: BibliographyService, private router: Router) {

  }

  ngOnInit() {
    this.book_name = this.route.snapshot.paramMap.get('title');
    let books = this.bookService.getAllBooks();
    for (let i = 0; i < books.length; i++) {
      if (this.book_name == books[i].title) {
        this.book = books[i];
      }
    }
  }

}
