import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UtilsModule } from '../utils/utils.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    UtilsModule,
    MatDividerModule,
    MatListModule
  ],
  exports: [BookDetailsComponent]
})
export class BookDetailsModule {}
