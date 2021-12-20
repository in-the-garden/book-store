import { Component, Input, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { BookListService } from '../shared/book-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public loading: boolean = true
  public searchString: string = ''

  constructor(public booksService: BookListService) { }

  ngOnInit() {
    this.booksService.fetchBooks()
      .pipe(delay(500))
      .subscribe(() => {
        this.loading = false
      })
  }

}
