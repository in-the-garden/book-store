import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { delay } from 'rxjs';
import { Book, BookListService } from '../shared/book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input() books: Book[] = []
  @Input() loading: boolean = true
  @Input() searchString: string = ''

  constructor(public booksService: BookListService) { }

  ngOnInit() { }

  sortUpTitle(books: Book[]) {
    this.booksService.onSortUpTitle(books)
  }

  sortDownTitle(books: Book[]) {
    this.booksService.onSortDownTitle(books)
  }

  sortUpPrice(books: Book[]) {
    this.booksService.onSortUpPrice(books)
  }

  sortDownPrice(books: Book[]) {
    this.booksService.onSortDownPrice(books)
  }

}
