import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobaComponent } from './soba/soba.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { PonudacomponentComponent } from './ponudacomponent/ponudacomponent.component';
import { PreporukacomponentComponent } from './preporukacomponent/preporukacomponent.component';
import { ONamaComponentComponent } from './o-nama-component/o-nama-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SobaComponent,
    NavbarcomponentComponent,
    PonudacomponentComponent,
    PreporukacomponentComponent,
    ONamaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
