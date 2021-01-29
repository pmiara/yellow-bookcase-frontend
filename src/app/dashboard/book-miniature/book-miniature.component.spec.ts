import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookMiniatureComponent } from './book-miniature.component';
import { Book } from '../../models/book.model';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilsModule } from '../../utils/utils.module';

describe('BookMiniatureComponent', () => {
  let fixture: ComponentFixture<BookMiniatureComponent>;
  const sampleBookData: Book = {
    title: 'Book Title',
    author: 'John Doe',
    coverImg: {
      name: 'photo.jpg',
      url: 'http://foo.com/photo.jpg',
      provider: 'non-local'
    },
    id: 1
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookMiniatureComponent],
      imports: [RouterTestingModule, UtilsModule]
    }).compileComponents();
  });

  it('given a book with a cover image shows the cover image', () => {
    fixture = TestBed.createComponent(BookMiniatureComponent);
    fixture.componentInstance.book = sampleBookData;
    fixture.detectChanges();
    const coverImg = fixture.nativeElement.querySelector('.cover-img');

    expect(coverImg.src).toEqual('http://foo.com/photo.jpg');
    expect(coverImg.alt).toEqual('photo.jpg');
  });

  it('given a book without a cover image shows the no-book-cover image', () => {
    const noCoverBookData: Book = {
      title: 'Coverless books',
      author: 'John Doe',
      id: 1
    };
    fixture = TestBed.createComponent(BookMiniatureComponent);
    fixture.componentInstance.book = noCoverBookData;
    fixture.detectChanges();
    const coverImg = fixture.nativeElement.querySelector('.cover-img');

    expect(coverImg.src).toContain('/assets/no_book_cover.png');
    expect(coverImg.alt).toEqual('Okładka zastępcza');
  });

  it('shows a title', () => {
    fixture = TestBed.createComponent(BookMiniatureComponent);
    fixture.componentInstance.book = sampleBookData;
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.title');

    expect(title.innerText).toEqual('Book Title');
  });

  it('shows an author', () => {
    fixture = TestBed.createComponent(BookMiniatureComponent);
    fixture.componentInstance.book = sampleBookData;
    fixture.detectChanges();
    const author = fixture.nativeElement.querySelector('.author');

    expect(author.innerText).toEqual('John Doe');
  });
});
