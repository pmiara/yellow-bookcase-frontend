import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoverImgFullUrlPipe } from './cover-img-pipe/cover-img-full-url.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { BookMiniatureComponent } from './book-miniature/book-miniature.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CoverImgFullUrlPipe,
    BookshelfComponent,
    BookMiniatureComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ]
})
export class DashboardModule {}
