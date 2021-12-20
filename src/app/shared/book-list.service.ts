import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export interface Book {
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
  selected: boolean
}

export interface BookList {
  total: string
  books: Book[]
}

@Injectable({providedIn: 'root'})
export class BookListService {
  public books: Book[] = []

  constructor (private http: HttpClient) {}

  fetchBooks(): Observable<BookList> {
    return this.http.get<BookList>('https://api.itbook.store/1.0/new')
    .pipe(tap(books => this.books = books.books))
  }

  onToggle(isbn13: string) {
    const idx = this.books.findIndex(book => book.isbn13 === isbn13)
    this.books[idx].selected = !this.books[idx].selected

    console.log(idx);
  }

  sortArray(a: Book, b: Book) {
   return a.title > b.title
  }

  onSortUpTitle() {
    this.books.sort((a: Book, b: Book) : number => a.title > b.title ? 1 : -1)
  }

  onSortDownTitle() {
     this.books.sort((a: Book, b: Book) : number => a.title > b.title ? 1 : -1)
  }

  onSortUpPrice() {
    this.books.sort((a: Book, b: Book) : number => Number(a.price.slice(1)) - Number(b.price.slice(1)))
  }

  onSortDownPrice() {
    this.books.sort((a: Book, b: Book) : number => Number(b.price.slice(1)) - Number(a.price.slice(1)))
  }

}
