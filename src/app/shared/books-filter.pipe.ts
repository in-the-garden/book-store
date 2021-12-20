import { Pipe, PipeTransform } from "@angular/core";
import { Book } from "./book-list.service";

@Pipe({
  name: 'booksFilter'
})
export class BooksFilterPipe implements PipeTransform {
  transform(books: Book[], search: string = ''): Book[] {
    if (!search) {
      return books
    }

    return books.filter(book => {
      return book.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || book.subtitle.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }
}
