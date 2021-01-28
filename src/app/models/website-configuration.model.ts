import { Bookshelf } from './bookshelf.model';

export interface WebsiteConfiguration {
  BookshelvesOrdering: { bookshelf: Bookshelf }[];
}
