import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {BannersComponent} from './banners/banners.component';
import {ViewBannersComponent} from './view-banners/view-banners.component';
import {AdsComponent} from './ads/ads.component';
import {ViewAdsComponent} from './view-ads/view-ads.component';
import {PromotionsComponent} from './promotions/promotions.component';
import {FooterComponent} from './footer/footer.component';
import {ViewFooterComponent} from './view-footer/view-footer.component';
import {TemplateDesignComponent} from './template-design/template-design.component';
import {HeaderComponent} from './header/header.component';


const routes: Routes = [{
  path: 'banners',
  component: BannersComponent
},
{
  path: 'viewbanners',
  component: ViewBannersComponent
},
{
  path: 'ads',
  component: AdsComponent
},
{
  path: 'viewads',
  component: ViewAdsComponent
},
{
  path: 'promotions',
  component: PromotionsComponent
},
{
  path: 'footer',
  component: FooterComponent
},
{
  path: 'viewfooter',
  component: ViewFooterComponent
},
{
  path: 'templatedesign',
  component: TemplateDesignComponent
},
{
  path: 'header',
  component: HeaderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
