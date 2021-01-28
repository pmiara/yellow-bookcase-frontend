import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-miniature',
  templateUrl: './book-miniature.component.html',
  styleUrls: ['./book-miniature.component.scss']
})
export class BookMiniatureComponent {
  @Input() book!: Book;
}
