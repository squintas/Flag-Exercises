import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostsModule } from '../posts/posts.module';
import { AlbumModule } from '../album/album.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscosModule } from './discos/discos.module';
import { DiscoService } from './discos/disco.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    AlbumModule,
    DiscosModule
  ],
  providers: [DiscoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
