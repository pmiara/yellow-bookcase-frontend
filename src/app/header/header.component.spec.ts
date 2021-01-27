import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BookshelvesService } from '../dashboard/bookshelves.service';
import { Bookshelf } from '../common/bookshelf.model';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatMenuModule } from '@angular/material/menu';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let bookshelvesServiceSpy: jasmine.SpyObj<BookshelvesService>;
  const bookshelvesData: Bookshelf[] = [
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

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BookshelvesService', ['getBookshelves']);
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
      providers: [{ provide: BookshelvesService, useValue: spy }]
    }).compileComponents();
    bookshelvesServiceSpy = TestBed.inject(
      BookshelvesService
    ) as jasmine.SpyObj<BookshelvesService>;
    bookshelvesServiceSpy.getBookshelves.and.returnValue(of(bookshelvesData));

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
});
