import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, MenuComponent]
    }).compileComponents();
  });

  beforeEach(() => {
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
    expect(fixture.nativeElement.querySelector('app-menu')).toBeTruthy();
  });
});
