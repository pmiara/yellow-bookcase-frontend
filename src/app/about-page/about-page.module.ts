import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [AboutPageComponent]
})
export class AboutPageModule {}
