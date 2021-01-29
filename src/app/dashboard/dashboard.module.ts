import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookMiniatureComponent } from './book-miniature/book-miniature.component';
import { CarouselModule } from 'primeng/carousel';
import { BooksCarouselComponent } from './books-carousel/books-carousel.component';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    DashboardComponent,
    BookshelfComponent,
    BookMiniatureComponent,
    BooksCarouselComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    CarouselModule,
    RouterModule,
    UtilsModule
  ]
})
export class DashboardModule {}
