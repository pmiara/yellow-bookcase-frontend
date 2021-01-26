import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  bookId: number;

  constructor(private route: ActivatedRoute) {
    const bookIdParameter = this.route.snapshot.paramMap.get('id');
    this.bookId = Number(bookIdParameter);
  }
}
