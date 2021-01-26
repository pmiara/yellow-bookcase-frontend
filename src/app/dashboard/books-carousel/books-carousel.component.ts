import { Component, Input } from '@angular/core';
import { Book } from '../../common/book.model';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './books-carousel.component.html',
  styleUrls: ['./books-carousel.component.scss']
})
export class BooksCarouselComponent {
  @Input() books!: Book[];
  // Keep the breakpoint values synchronized with /src/sass/_variables.scss.
  responsiveOptions = [
    {
      breakpoint: '500px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '800px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '1100px',
      numVisible: 4,
      numScroll: 4
    },
    {
      breakpoint: '1400px',
      numVisible: 5,
      numScroll: 5
    }
  ];

  constructor() {
    Carousel.prototype.onTouchMove = () => {
      // prevent default behavior to make scrolling work on mobile devices
    };
  }
}
