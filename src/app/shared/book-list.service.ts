import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, Observable, tap } from "rxjs";

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
  public selectedBooks: Book[] = []

  constructor (private http: HttpClient) {}

  fetchBooks(): Observable<BookList> {
    return this.http.get<BookList>('https://api.itbook.store/1.0/new')
    .pipe(tap(books => this.books = books.books))
  }

  removeBook(isbn13: string) {
    this.selectedBooks.forEach((book, idx) => {
      if (book.isbn13 === isbn13) this.selectedBooks.splice(idx,1)
    })
  }

  addBookToShop(idx: number) {
    this.selectedBooks.push(this.books[idx])
  }

  onToggle(isbn13: string) {
    const idx = this.books.findIndex(book => book.isbn13 === isbn13)
    this.books[idx].selected = !this.books[idx].selected

    if (!this.selectedBooks.includes(this.books[idx])) {
      this.addBookToShop(idx)
    } else {
      this.removeBook(isbn13)
    }
  }

  sortArray(a: Book, b: Book) {
   return a.title > b.title
  }

  onSortUpTitle(books: Book[]) {
    books.sort((a: Book, b: Book) : number => a.title > b.title ? 1 : -1)
  }

  onSortDownTitle(books: Book[]) {
    books.sort((a: Book, b: Book) : number => a.title > b.title ? -1 : 1)
  }

  onSortUpPrice(books: Book[]) {
    books.sort((a: Book, b: Book) : number => Number(a.price.slice(1)) - Number(b.price.slice(1)))
  }

  onSortDownPrice(books: Book[]) {
    books.sort((a: Book, b: Book) : number => Number(b.price.slice(1)) - Number(a.price.slice(1)))
  }

}
