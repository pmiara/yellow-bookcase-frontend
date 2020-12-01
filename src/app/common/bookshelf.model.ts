import { Book } from './book.model';

export interface Bookshelf {
  id: number;
  name: string;
  books: Book[];
}
