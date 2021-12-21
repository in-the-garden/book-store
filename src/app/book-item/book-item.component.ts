import { Component, Input, OnInit } from '@angular/core';
import { Book, BookListService } from '../shared/book-list.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() books: Book[] = []
  @Input() loading: boolean = true
  @Input() searchString: string = ''

  constructor(public booksService: BookListService) { }

  ngOnInit(): void {
  }

  toggleBook(isbn13: string) {
    this.booksService.onToggle(isbn13)
  }

  openBookDetail(isbn13: string) {
    console.log(isbn13);
  }
}
