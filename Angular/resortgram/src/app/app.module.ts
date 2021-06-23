import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SharedComponentsComponent } from './shared/shared-components/shared-components.component';
import { SharedModulesComponent } from './shared/shared-modules/shared-modules.component';
import { ServicesComponent } from './services/services.component';
import { HotelTypeComponent } from './hotel-type/hotel-type.component';
import { HotelCategoryComponent } from './hotel-category/hotel-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    SharedComponentsComponent,
    SharedModulesComponent,
    ServicesComponent,
    HotelTypeComponent,
    HotelCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
