import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoverImgFullUrlPipe } from '../cover-img-pipe/cover-img-full-url.pipe';
import { Bookshelf } from '../../common/bookshelf.model';
import { BookMiniatureComponent } from '../book-miniature/book-miniature.component';
import { BookshelfComponent } from './bookshelf.component';
import { BooksCarouselComponent } from '../books-carousel/books-carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookshelfComponent', () => {
  let fixture: ComponentFixture<BookshelfComponent>;
  const bookshelfData: Bookshelf = {
    id: 1,
    name: 'Bookshelf name',
    books: [
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
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoverImgFullUrlPipe,
        BookMiniatureComponent,
        BookshelfComponent,
        BooksCarouselComponent
      ],
      imports: [CarouselModule, RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelfComponent);
    fixture.componentInstance.bookshelf = bookshelfData;
    fixture.detectChanges();
  });

  it('shows a bookshelf name', () => {
    const bookshelfName = fixture.nativeElement.querySelector(
      '.bookshelf-name'
    );

    expect(bookshelfName.innerText).toEqual('BOOKSHELF NAME');
  });

  it('shows a carousel', () => {
    expect(fixture.nativeElement.querySelector('app-carousel')).toBeTruthy();
  });
});
