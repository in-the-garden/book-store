import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book, BookListService } from '../shared/book-list.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public book: Book = {
    title: '',
    subtitle: '',
    isbn13: '',
    price: '',
    image: '',
    url: '',
    selected: false
  }

  public querySubscription: Subscription = new Subscription;

  constructor(public booksService: BookListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
          this.book.title = queryParam['title'];
          this.book.subtitle = queryParam['subtitle'];
          this.book.isbn13 = queryParam['isbn13'];
          this.book.price = queryParam['price'];
          this.book.image = queryParam['image'];
          this.book.url = queryParam['url'];
          this.book.selected = queryParam['selected'] ? true : false;
      }
  );

  }

  toggleBook(book: Book) {
    this.booksService.onToggle(book.isbn13)
    book.selected=!book.selected
  }

}
