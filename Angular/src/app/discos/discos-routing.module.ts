import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { AlterarComponent } from './alterar/alterar.component';
import { IndexComponent } from './index/index.component';
import { ApagarComponent } from './apagar/apagar.component';

const routes: Routes = [

  { path:"discos", redirectTo:"discos/index", pathMatch:"full" },
  { path:"discos/index", component: IndexComponent },
  { path:"discos/adicionar", component: AdicionarComponent },
  { path:"discos/alterar/:pk", component: AlterarComponent },
  { path:"discos/apagar/:pk", component: ApagarComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscosRoutingModule { }
