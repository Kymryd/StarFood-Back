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
import { RoleComponent } from './components/role/role.component';
import {RoleService} from './components/role/role.service';
import {AddRoleComponent} from './components/role/add-role.component';
import { ProductComponent } from './components/product/product.component';
import {AddProductComponent} from './components/product/add-product.component';
import {ProductService} from './components/product/product.service';
import { CategoryComponent } from './components/category/category.component';
import {AddCategoryComponent} from './components/category/add-category.component';
import {CategoryService} from './components/category/category.service';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import {ProductTypeService} from './components/product-type/product-type.service';
import {AddProductTypeComponent} from './components/product-type/add-product-type.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    AddCountryComponent,
    LangComponent,
    AddLangComponent,
    UserComponent,
    AddUserComponent,
    NavComponent,
    RoleComponent,
    AddRoleComponent,
    ProductComponent,
    AddProductComponent,
    CategoryComponent,
    AddCategoryComponent,
    ProductTypeComponent,
    AddProductTypeComponent
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
    LangService,
    RoleService,
    ProductService,
    CategoryService,
    ProductTypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
