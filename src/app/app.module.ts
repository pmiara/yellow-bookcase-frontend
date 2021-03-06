import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './header/header.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterModule } from './footer/footer.module';
import { BookDetailsModule } from './book-details/book-details.module';
import { AboutPageModule } from './about-page/about-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashboardModule,
    HeaderModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FooterModule,
    BookDetailsModule,
    AboutPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
