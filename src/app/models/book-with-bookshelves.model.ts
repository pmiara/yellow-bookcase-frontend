import { Bookshelf } from './bookshelf.model';
import { Book } from './book.model';

export interface BookWithBookshelves extends Book {
  bookshelves: Bookshelf[];
}
