import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import {AddCountryComponent} from './components/country/add-country.component';
import {CountryService} from './components/country/country.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LangComponent } from './components/lang/lang.component';
import {AddLangComponent} from './components/lang/add-lang.component';
import {UserComponent} from './components/user/user.component';
import {AddUserComponent} from './components/user/add-user.component';
import {UserService} from './components/user/user.service';
import {LangService} from './components/lang/lang.service';
import { NavComponent } from './components/nav/nav.component';


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
