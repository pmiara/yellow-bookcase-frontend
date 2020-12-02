import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [HeaderComponent, MenuComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [HeaderComponent]
})
export class HeaderModule {}
