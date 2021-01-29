import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksCarouselComponent } from './books-carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { Book } from '../../models/book.model';
import { BookMiniatureComponent } from '../book-miniature/book-miniature.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilsModule } from '../../utils/utils.module';

describe('CarouselComponent', () => {
  let fixture: ComponentFixture<BooksCarouselComponent>;
  const booksData: Book[] = [
    {
      title: 'Title 1',
      author: 'John Doe',
      id: 1
    },
    {
      title: 'Title 2',
      author: 'Julia Smith',
      id: 2
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookMiniatureComponent, BooksCarouselComponent],
      imports: [CarouselModule, RouterTestingModule, UtilsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCarouselComponent);
    fixture.componentInstance.books = booksData;
    fixture.detectChanges();
  });

  it('shows book miniatures', () => {
    const books = fixture.nativeElement.querySelectorAll('app-book-miniature');

    expect(books.length).toBe(2);
  });

  it('shows the prev and the next buttons', () => {
    const prev = fixture.nativeElement.querySelector('.p-carousel-prev');
    const next = fixture.nativeElement.querySelector('.p-carousel-next');

    expect(prev).toBeTruthy();
    expect(next).toBeTruthy();
  });

  it('does not show indicators', () => {
    const indicators = fixture.nativeElement.querySelector(
      '.p-carousel-indicators'
    );

    expect(getComputedStyle(indicators).getPropertyValue('display')).toEqual(
      'none'
    );
  });

  it("sets the buttons' height to 100% of the carousel height", () => {
    const prev = fixture.nativeElement.querySelector('.p-carousel-prev');
    const next = fixture.nativeElement.querySelector('.p-carousel-next');
    const carouselHeight = getComputedStyle(
      fixture.nativeElement
    ).getPropertyValue('height');

    expect(getComputedStyle(prev).getPropertyValue('height')).toEqual(
      carouselHeight
    );
    expect(getComputedStyle(next).getPropertyValue('height')).toEqual(
      carouselHeight
    );
  });
});
