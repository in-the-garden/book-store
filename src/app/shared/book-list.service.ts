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
}
