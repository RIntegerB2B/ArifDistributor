import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule} from '@angular/forms';
import { BannersComponent } from './banners/banners.component';
import {
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatRippleModule,
  MatDialogModule,
  MatChipsModule,
  MatInputModule,
  MatFormFieldModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatTableModule,
} from '@angular/material';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {SettingsService} from './settings.service';
import {SettingsRoutingModule} from './settings-routing.module';
import { ViewBannersComponent } from './view-banners/view-banners.component';
import { AdsComponent } from './ads/ads.component';
import { ViewAdsComponent } from './view-ads/view-ads.component';
import { AppLoadModule} from './../app-load/app-load.module';
import { PromotionsComponent } from './promotions/promotions.component';
import { FooterComponent } from './footer/footer.component';
import { ViewFooterComponent } from './view-footer/view-footer.component';
import { TemplateDesignComponent } from './template-design/template-design.component';
import { HeaderComponent } from './header/header.component';
import { ViewPromotionsComponent } from './view-promotions/view-promotions.component';
import { ViewSinglePromotionsComponent } from './view-single-promotions/view-single-promotions.component';
@NgModule({
  declarations: [BannersComponent, ViewBannersComponent, AdsComponent, ViewAdsComponent,
    PromotionsComponent, FooterComponent, ViewFooterComponent, TemplateDesignComponent, HeaderComponent,
    ViewPromotionsComponent, ViewSinglePromotionsComponent],
  imports: [
    HttpClientModule,
    SettingsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatStepperModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatNativeDateModule,
    MatChipsModule,
    MatCheckboxModule,
    AppLoadModule
  ],
  providers: [SettingsService]
})
export class SettingsModule { }
