import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverImgFullUrlPipe } from './cover-img-full-url.pipe';

@NgModule({
  declarations: [CoverImgFullUrlPipe],
  imports: [CommonModule],
  exports: [CoverImgFullUrlPipe]
})
export class UtilsModule {}
