import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BookshelvesService } from '../services/bookshelves.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BookshelfWithBooks } from '../models/bookshelf-with-books.model';
import { WebsiteConfigurationService } from '../services/website-configuration.service';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let websiteConfigurationServiceSpy: jasmine.SpyObj<WebsiteConfigurationService>;
  let bookshelvesServiceSpy: jasmine.SpyObj<BookshelvesService>;
  const bookshelvesData: BookshelfWithBooks[] = [
    {
      id: 1,
      name: 'First bookshelf',
      books: []
    },
    {
      id: 2,
      name: 'Second bookshelf',
      books: []
    }
  ];
  const bookSuggestionFormUrl = 'http://example.com/form';

  beforeEach(async () => {
    const configSpy = jasmine.createSpyObj('WebsiteConfigurationService', [
      'getBookSuggestionFormUrl'
    ]);
    const bookshelvesSpy = jasmine.createSpyObj('BookshelvesService', [
      'getBookshelvesWithBooks'
    ]);
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        MatIconModule,
        MatButtonModule,
        HttpClientTestingModule,
        MatMenuModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: WebsiteConfigurationService, useValue: configSpy },
        { provide: BookshelvesService, useValue: bookshelvesSpy }
      ]
    }).compileComponents();
    websiteConfigurationServiceSpy = TestBed.inject(
      WebsiteConfigurationService
    ) as jasmine.SpyObj<WebsiteConfigurationService>;
    bookshelvesServiceSpy = TestBed.inject(
      BookshelvesService
    ) as jasmine.SpyObj<BookshelvesService>;
    websiteConfigurationServiceSpy.getBookSuggestionFormUrl.and.returnValue(
      of(bookSuggestionFormUrl)
    );
    bookshelvesServiceSpy.getBookshelvesWithBooks.and.returnValue(
      of(bookshelvesData)
    );

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
  });

  it('shows a title', () => {
    expect(fixture.nativeElement.querySelector('.title').innerText).toEqual(
      'Żółta Biblioteczka'
    );
  });

  it('shows a logo', () => {
    expect(fixture.nativeElement.querySelector('.logo')).toBeTruthy();
  });

  it('shows a menu', () => {
    expect(fixture.nativeElement.querySelector('.menu')).toBeTruthy();
  });

  it('shows a list of bookshelves after clicking bookshelves-list-link menu entry', async () => {
    expect(
      fixture.nativeElement.parentNode.querySelector('.bookshelves-list-menu')
    ).toBeFalsy();
    fixture.nativeElement.querySelector('.bookshelves-list-link').click();
    fixture.detectChanges();
    expect(
      fixture.nativeElement.parentNode.querySelector('.bookshelves-list-menu')
    ).toBeTruthy();
  });

  it('shows the names of bookshelves fetched from the backend', async () => {
    fixture.nativeElement.querySelector('.bookshelves-list-link').click();
    fixture.detectChanges();
    const entries = fixture.nativeElement.parentNode.querySelectorAll(
      '.bookshelves-list-menu button'
    );
    expect(entries[0].innerText).toEqual('First bookshelf');
    expect(entries[1].innerText).toEqual('Second bookshelf');
  });

  it('sets the href attribute for a book suggestion menu entry', () => {
    expect(
      fixture.nativeElement.querySelector('.suggest-book').getAttribute('href')
    ).toEqual('http://example.com/form');
  });
});
