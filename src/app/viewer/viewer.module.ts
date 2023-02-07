import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatIconModule } from '@angular/material/icon';

import { MainPageComponent } from './main-page/main-page.component';
import { ModalComponent } from './main-page/modal/modal.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ModalComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    MatIconModule
  ]
})
export class ViewerModule { }
