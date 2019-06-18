import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryComponent } from './components/country/country.component';
import {AddCountryComponent} from './components/country/add-country.component';
import {LangComponent} from './components/lang/lang.component';
import {AddLangComponent} from './components/lang/add-lang.component';
import {UserComponent} from './components/user/user.component';
import {AddUserComponent} from './components/user/add-user.component';
import {RoleComponent} from './components/role/role.component';
import {AddRoleComponent} from './components/role/add-role.component';
import {ProductComponent} from './components/product/product.component';
import {AddProductComponent} from './components/product/add-product.component';
import {CategoryComponent} from './components/category/category.component';
import {AddCategoryComponent} from './components/category/add-category.component';
import {AddProductTypeComponent} from './components/product-type/add-product-type.component';
import {ProductTypeComponent} from './components/product-type/product-type.component';

const routes: Routes = [
  { path: 'countries', component: CountryComponent },
  { path: 'addCountry', component: AddCountryComponent },
  { path: 'langs', component: LangComponent },
  { path: 'addLang', component: AddLangComponent },
  { path: 'users', component: UserComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'roles', component: RoleComponent },
  { path: 'addRole', component: AddRoleComponent },
  { path: 'products', component: ProductComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'addCategory', component: AddCategoryComponent },
  { path: 'productTypes', component: ProductTypeComponent },
  { path: 'addProductType', component: AddProductTypeComponent }

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
