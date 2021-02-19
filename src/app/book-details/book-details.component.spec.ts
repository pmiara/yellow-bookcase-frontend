import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilsModule } from '../utils/utils.module';
import { BookWithBookshelves } from '../models/book-with-bookshelves.model';
import { BookDetailsComponent } from './book-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BooksService } from '../services/books.service';
import { of } from 'rxjs';

describe('BookDetailsComponent', () => {
  let fixture: ComponentFixture<BookDetailsComponent>;
  let booksServiceSpy: jasmine.SpyObj<BooksService>;

  const sampleBookData: BookWithBookshelves = {
    title: 'Book Title',
    author: 'John Doe',
    coverImg: {
      name: 'photo.jpg',
      url: 'http://foo.com/photo.jpg',
      provider: 'non-local'
    },
    id: 1,
    bookshelves: [
      { name: 'Books for kids', id: 1 },
      { name: 'Books not for kids', id: 2 }
    ],
    description: 'This is a very nice book',
    addedBy: 'Bookman Adder',
    lubimyCzytacUrl: 'http://example.com/book-title'
  };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BooksService', [
      'getBookWithBookshelves'
    ]);
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      imports: [RouterTestingModule, UtilsModule, HttpClientTestingModule],
      providers: [{ provide: BooksService, useValue: spy }]
    }).compileComponents();
    booksServiceSpy = TestBed.inject(BooksService) as jasmine.SpyObj<
      BooksService
    >;
    booksServiceSpy.getBookWithBookshelves.and.returnValue(of(sampleBookData));
    fixture = TestBed.createComponent(BookDetailsComponent);
    fixture.detectChanges();
  });

  it('shows the title', () => {
    expect(fixture.nativeElement.querySelector('.title').innerText).toEqual(
      'Book Title'
    );
  });

  it('shows the author', () => {
    expect(fixture.nativeElement.querySelector('.author').innerText).toEqual(
      'John Doe'
    );
  });

  it('shows the description', () => {
    expect(
      fixture.nativeElement.querySelector('.description').innerText
    ).toEqual('This is a very nice book');
  });

  it('shows the name of the person who added the book', () => {
    expect(fixture.nativeElement.querySelector('.added-by').innerText).toEqual(
      'Dodana przez: Bookman Adder'
    );
  });

  it('shows the URL to lubimyczytac website', () => {
    const link = fixture.nativeElement.querySelector('.lubimy-czytac-url a');
    expect(link.innerText).toEqual('link');
    expect(link.getAttribute('href')).toEqual('http://example.com/book-title');
  });

  it('shows the bookshelves that contain this book', () => {
    expect(
      fixture.nativeElement.querySelector('.bookshelves').innerText
    ).toContain('Books not for kids');
    expect(
      fixture.nativeElement.querySelector('.bookshelves').innerText
    ).toContain('Books for kids');
  });

  it('given the book with the cover image shows the cover image', () => {
    const coverImg = fixture.nativeElement.querySelector('.cover-img');

    expect(coverImg.src).toEqual('http://foo.com/photo.jpg');
    expect(coverImg.alt).toEqual('photo.jpg');
  });

  it('given a book without a cover image shows the no-book-cover image', () => {
    const bookWithoutCover: BookWithBookshelves = {
      title: 'Coverless books',
      author: 'John Doe',
      bookshelves: [],
      id: 1
    };
    booksServiceSpy.getBookWithBookshelves.and.returnValue(
      of(bookWithoutCover)
    );
    fixture = TestBed.createComponent(BookDetailsComponent);
    fixture.detectChanges();
    const coverImg = fixture.nativeElement.querySelector('.cover-img');

    expect(coverImg.src).toContain('/assets/no_book_cover.png');
    expect(coverImg.alt).toEqual('Okładka zastępcza');
  });
});
