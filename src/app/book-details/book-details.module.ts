import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UtilsModule } from '../utils/utils.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BookDetailsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    UtilsModule,
    FlexLayoutModule
  ],
  exports: [BookDetailsComponent]
})
export class BookDetailsModule {}
