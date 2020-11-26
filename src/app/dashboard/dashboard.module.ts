import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoverImgFullUrlPipe } from './cover-img-full-url.pipe';

@NgModule({
  declarations: [DashboardComponent, CoverImgFullUrlPipe],
  imports: [CommonModule, MatCardModule, MatButtonModule, FlexLayoutModule]
})
export class DashboardModule {}
