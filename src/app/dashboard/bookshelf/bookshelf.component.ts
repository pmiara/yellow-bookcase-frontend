import { Component, Input } from '@angular/core';
import { BookshelfWithBooks } from '../../models/bookshelf-with-books.model';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent {
  @Input() bookshelf!: BookshelfWithBooks;
}
