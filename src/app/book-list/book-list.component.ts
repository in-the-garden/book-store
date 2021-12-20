import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { delay } from 'rxjs';
import { Book, BookListService } from '../shared/book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, DoCheck {
  @Input() books: Book[] = []
  @Input() loading: boolean = true

  constructor(public booksService: BookListService) { }
  ngDoCheck(): void {
    console.log(this.books);
  }

  ngOnInit() { }

  toggleBook(isbn13: string) {
    this.booksService.onToggle(isbn13)
  }

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
