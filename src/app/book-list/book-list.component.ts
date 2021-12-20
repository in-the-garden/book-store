import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { BookListService } from '../shared/book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public loading: boolean = true

  constructor(public booksService: BookListService) { }

  ngOnInit() {
    this.booksService.fetchBooks()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false
        console.log(this.booksService.books)
      })
  }

  toggleBook(isbn13: string) {
    this.booksService.onToggle(isbn13)
  }

  sortUpTitle() {
    this.booksService.onSortUpTitle()
  }

  sortDownTitle() {
    this.booksService.onSortDownTitle()
  }

  sortUpPrice() {
    this.booksService.onSortUpPrice()
  }

  sortDownPrice() {
    this.booksService.onSortDownPrice()
  }

}
