import { Component, OnInit } from '@angular/core';
import { BookListService } from '../shared/book-list.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  public loading: boolean = false

  constructor(public booksService: BookListService) { }

  ngOnInit(): void { }

}
