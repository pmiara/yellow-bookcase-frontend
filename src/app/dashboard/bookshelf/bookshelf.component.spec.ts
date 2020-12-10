import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoverImgFullUrlPipe } from '../cover-img-pipe/cover-img-full-url.pipe';
import { Bookshelf } from '../../common/bookshelf.model';
import { BookMiniatureComponent } from '../book-miniature/book-miniature.component';
import { BookshelfComponent } from './bookshelf.component';

describe('BookshelfComponent', () => {
  let fixture: ComponentFixture<BookshelfComponent>;
  const bookshelfData: Bookshelf = {
    id: 1,
    name: 'Bookshelf name',
    books: [
      {
        title: 'Title 1',
        author: 'John Doe',
        coverImg: {
          name: 'photo.jpg',
          url: 'foo.com/photo.jpg',
          provider: 'foo'
        }
      },
      {
        title: 'Title 2',
        author: 'Julia Smith'
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CoverImgFullUrlPipe,
        BookMiniatureComponent,
        BookshelfComponent
      ]
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

  it('shows book miniatures', () => {
    const books = fixture.nativeElement.querySelectorAll('app-book-miniature');

    expect(books.length).toBe(2);
  });
});
