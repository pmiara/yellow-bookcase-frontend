import { Bookshelf } from './bookshelf.model';
import { Book } from './book.model';

export interface BookshelfWithBooks extends Bookshelf {
  books: Book[];
}
