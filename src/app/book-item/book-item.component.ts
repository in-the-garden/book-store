import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public booksService: BookListService, private route: Router) { }

  ngOnInit(): void {
  }

  toggleBook(isbn13: string) {
    this.booksService.onToggle(isbn13)
  }

  openBookDetail(book: Book) {
    this.route.navigate(
      ['/books', book.isbn13],
      {
        queryParams: {
          'title': book.title,
          'subtitle': book.subtitle,
          'isbn13': book.isbn13,
          'price': book.price,
          'image': book.image,
          'url': book.url,
          'selected': book.selected
        }
      }
    );
  }
}
