import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { IndexComponent } from './index/index.component';
import { AdicionarComponent } from './adicionar/adicionar.component';


@NgModule({
  declarations: [
    IndexComponent,
    AdicionarComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
