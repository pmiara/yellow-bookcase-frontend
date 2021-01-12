import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private showSidenav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  getShowSidenav(): Observable<boolean> {
    return this.showSidenav$.asObservable();
  }

  openSidenav(): void {
    this.showSidenav$.next(true);
  }

  closeSidenav(): void {
    this.showSidenav$.next(false);
  }
}
