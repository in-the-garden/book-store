import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { BookListService } from '../shared/book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(public booksService: BookListService) { }

  ngOnInit() {
    this.booksService.fetchBooks()
      .pipe(delay(500))
      .subscribe(() => {
        console.log(this.booksService.books)
      })
  }

}
