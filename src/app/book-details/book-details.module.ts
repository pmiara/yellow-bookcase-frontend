import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [CommonModule],
  exports: [BookDetailsComponent]
})
export class BookDetailsModule {}
