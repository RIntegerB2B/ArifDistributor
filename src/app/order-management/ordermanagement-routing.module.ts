import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { Routes, RouterModule } from '@angular/router';
import {ViewOrderDetailsComponent} from './view-order-details/view-order-details.component';

const routes: Routes = [{
  path: 'vieworders',
  component: ViewOrdersComponent
}, {
  path: 'viewordersdetails/:value',
  component: ViewOrderDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdermanagementRoutingModule { }
