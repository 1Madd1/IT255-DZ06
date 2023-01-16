import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobaComponent } from './soba/soba.component';
import { NavbarcomponentComponent } from './navbarcomponent/navbarcomponent.component';
import { PonudacomponentComponent } from './ponudacomponent/ponudacomponent.component';
import { PreporukacomponentComponent } from './preporukacomponent/preporukacomponent.component';
import { ONamaComponentComponent } from './o-nama-component/o-nama-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomService } from './model/roomservice';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SobaService } from './services/soba.service';

const routes: Routes = [
  // osnovne rute
  { path: '', redirectTo: 'soba', pathMatch: 'full' },
  { path: 'soba', component: SobaComponent },
  { path: 'simpleHttp', component: SimpleHttpComponent }]

@NgModule({
  declarations: [
    AppComponent,
    SobaComponent,
    NavbarcomponentComponent,
    PonudacomponentComponent,
    PreporukacomponentComponent,
    ONamaComponentComponent,
    SimpleHttpComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
