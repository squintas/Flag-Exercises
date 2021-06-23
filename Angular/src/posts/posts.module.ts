import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { PostsRoutingModule } from './posts-routing.module';
import { IndexComponent } from './index/index.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { ApagarComponent } from './apagar/apagar.component';
import { AlterarComponent } from './alterar/alterar.component';



@NgModule({
  declarations: [
    IndexComponent,
    AdicionarComponent,
    ApagarComponent,
    AlterarComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ]
})
export class PostsModule { }
