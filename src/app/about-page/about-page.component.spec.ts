import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AboutPageService } from '../services/about-page.service';
import { AboutPageComponent } from './about-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('AboutPageComponent', () => {
  let fixture: ComponentFixture<AboutPageComponent>;
  let aboutPageServiceSpy: jasmine.SpyObj<AboutPageService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AboutPageService', [
      'getTitleAndContent'
    ]);
    await TestBed.configureTestingModule({
      declarations: [AboutPageComponent],
      imports: [MatProgressSpinnerModule, HttpClientTestingModule],
      providers: [{ provide: AboutPageService, useValue: spy }]
    }).compileComponents();
    aboutPageServiceSpy = TestBed.inject(AboutPageService) as jasmine.SpyObj<
      AboutPageService
    >;
    aboutPageServiceSpy.getTitleAndContent.and.returnValue(
      of({ title: 'Page Title', content: 'Lorem ipsum dolor sit amet.' })
    );
    fixture = TestBed.createComponent(AboutPageComponent);
    fixture.detectChanges();
  });

  it('shows the title', () => {
    expect(fixture.nativeElement.querySelector('.title').innerText).toEqual(
      'Page Title'
    );
  });

  it('shows the content', () => {
    expect(fixture.nativeElement.querySelector('.content').innerText).toEqual(
      'Lorem ipsum dolor sit amet.'
    );
  });
});
