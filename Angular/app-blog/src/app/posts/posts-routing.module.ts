import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { ApagarComponent } from './apagar/apagar.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: "posts/" , redirectTo: "postsIndex", pathMatch:"full"},
  { path: "posts/index" , component: IndexComponent},
  { path: "posts/adicionar" , component: AdicionarComponent },
  { path: "posts/alterar/:pk" , component: AlterarComponent },
  { path: "posts/apagar/:pk" , component: ApagarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
