import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavSidebarComponent} from '../app/shared/nav-sidebar/nav-sidebar.component';


const routes: Routes = [
  {
    path: '',
    component: NavSidebarComponent,
    children: [{
      path: 'settings',
      loadChildren: './settings/settings.module#SettingsModule'
    },
    {
      path: 'products',
      loadChildren: './product/product.module#ProductModule'
    },
    {
      path: 'orders',
      loadChildren: './order-management/order-management.module#OrderManagementModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
