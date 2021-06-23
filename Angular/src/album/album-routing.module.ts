import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AdicionarComponent } from './adicionar/adicionar.component';


const routes: Routes = [
  { path:"album", redirectTo:"album/index", pathMatch:"full" },
  { path:"album/index", component: IndexComponent },
  { path:"album/adicionar", component: AdicionarComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
