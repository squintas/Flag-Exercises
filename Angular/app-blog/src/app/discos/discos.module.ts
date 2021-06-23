import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscosRoutingModule } from './discos-routing.module';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ApagarComponent } from './apagar/apagar.component';


@NgModule({
  declarations: [
    AdicionarComponent,
    AlterarComponent,
    ApagarComponent
  ],
  imports: [
    CommonModule,
    DiscosRoutingModule
  ]
})
export class DiscosModule { }
