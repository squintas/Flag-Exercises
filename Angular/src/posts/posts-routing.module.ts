import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ApagarComponent } from './apagar/apagar.component';


const routes: Routes = [
  { path:"posts", redirectTo:"posts/index", pathMatch:"full" },
  { path:"posts/index", component: IndexComponent },
  { path:"posts/adicionar", component: AdicionarComponent },
  { path:"posts/alterar/:pk", component: AlterarComponent },
  { path:"posts/apagar/:pk", component: ApagarComponent }
];

// GET["pk"]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
