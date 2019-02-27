import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ViewProductComponent} from './view-product/view-product.component';


const routes: Routes = [{
  path: 'viewproducts',
  component: ViewProductComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
