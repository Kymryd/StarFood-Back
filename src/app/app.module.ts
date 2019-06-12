import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import {AddCountryComponent} from './country/add-country.component';
import {CountryService} from './country/country.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LangComponent } from './lang/lang.component';
import {AddLangComponent} from './lang/add-lang.component';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {UserService} from './user/user.service';
import {LangService} from './lang/lang.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    AddCountryComponent,
    LangComponent,
    AddLangComponent,
    UserComponent,
    AddUserComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    CountryService,
    LangService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
