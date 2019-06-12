import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './components/country/country.component';
import {AddCountryComponent} from './components/country/add-country.component';
import {LangComponent} from './components/lang/lang.component';
import {AddLangComponent} from './components/lang/add-lang.component';
import {UserComponent} from './components/user/user.component';
import {AddUserComponent} from './components/user/add-user.component';

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
