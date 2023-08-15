import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { UPDATERestaurantComponent } from './update-restaurant/update-restaurant.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { MuneComponent } from './mune/mune.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AdminNavComponent } from './admin-nav/admin-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddRestaurantComponent,
    UPDATERestaurantComponent,
    ListRestaurantComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    MuneComponent,
    NavComponent,
    FooterComponent,
   
    AdminNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
