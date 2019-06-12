import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './country/country.component';
import {AddCountryComponent} from './country/add-country.component';
import {LangComponent} from './lang/lang.component';
import {AddLangComponent} from './lang/add-lang.component';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from './user/add-user.component';

const routes: Routes = [
  { path: 'countries', component: CountryComponent },
  { path: 'addCountry', component: AddCountryComponent },
  { path: 'langs', component: LangComponent },
  { path: 'addLang', component: AddLangComponent },
  { path: 'users', component: UserComponent },
  { path: 'addUser', component: AddUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
