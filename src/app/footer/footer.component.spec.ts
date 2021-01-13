import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
  });

  it("shows the owner's logo", () => {
    expect(fixture.nativeElement.querySelector('img')).toBeTruthy();
  });

  it('shows the copyright', () => {
    const copyright = fixture.nativeElement.querySelector('.copyright');
    expect(copyright).toBeTruthy();
    expect(copyright.innerText).toContain('Polska 2050');
    expect(copyright.innerText).toContain('Wszelkie prawa zastrzeżone');
  });
});
