import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {NavSidebarComponent} from './nav-sidebar/nav-sidebar.component';

const routes: Routes = [{
  path: 'navside',
  component: NavSidebarComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
