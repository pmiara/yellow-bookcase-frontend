import { ComponentFixture, TestBed } from '@angular/core/testing';
import { delay } from 'rxjs/operators';
import { DashboardComponent } from './dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookshelvesService } from '../services/bookshelves.service';
import { of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookMiniatureComponent } from './book-miniature/book-miniature.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { CarouselModule } from 'primeng/carousel';
import { BooksCarouselComponent } from './books-carousel/books-carousel.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BookshelfWithBooks } from '../models/bookshelf-with-books.model';
import { UtilsModule } from '../utils/utils.module';

describe('BooksDashboardComponent', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let bookshelvesServiceSpy: jasmine.SpyObj<BookshelvesService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BookshelvesService', [
      'getBookshelvesWithBooks'
    ]);
    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        BookMiniatureComponent,
        BookshelfComponent,
        BooksCarouselComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatProgressSpinnerModule,
        CarouselModule,
        RouterTestingModule,
        UtilsModule
      ],
      providers: [{ provide: BookshelvesService, useValue: spy }]
    }).compileComponents();
    bookshelvesServiceSpy = TestBed.inject(
      BookshelvesService
    ) as jasmine.SpyObj<BookshelvesService>;
  });

  it('shows bookshelves', () => {
    const bookshelvesData: BookshelfWithBooks[] = [
      {
        id: 1,
        name: 'First bookshelf',
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
      },
      {
        id: 2,
        name: 'Second bookshelf',
        books: [
          {
            title: 'Third Title',
            author: 'John Doe',
            id: 3
          }
        ]
      }
    ];
    bookshelvesServiceSpy.getBookshelvesWithBooks.and.returnValue(
      of(bookshelvesData)
    );
    fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const bookshelves = fixture.nativeElement.querySelectorAll('app-bookshelf');

    expect(bookshelves.length).toBe(2);
  });

  it('shows a progress indicator while waiting for data', () => {
    bookshelvesServiceSpy.getBookshelvesWithBooks.and.returnValue(
      of([]).pipe(delay(1000))
    );
    fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-spinner')).toBeTruthy();
  });
});
