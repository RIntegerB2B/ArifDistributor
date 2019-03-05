import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import {Banner} from './banners/banner.model';
import {Ads} from './ads/ads.model';
import {Footer} from './footer/footer.model';
import {TemplateDesign} from './template-design/template-design.model';
import {Header} from './header/header.model';
import { AppLoadModule } from './../app-load/app-load.module';
import { AppLoadService } from '../app-load/app-load.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  serviceUrl: string = AppSetting.serviceUrl;

  constructor(private httpClient: HttpClient, private appLoadService: AppLoadService) {
   console.log(this.appLoadService.getSettings());
   }

  // banners

  uploadBanners(data , position): Observable<any> {
    const addUrl = 'banners/';
    const url: string = this.serviceUrl + addUrl + position ;
    return this.httpClient.put<boolean>(url, data);
  }
  getBanners(): Observable<any> {
    const categoryUrl = 'banners';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Banner>(url);
  }
  deleteBanner(data): Observable<any> {
    const deleteUrl = 'deletebanners/';
    const url: string = this.serviceUrl + deleteUrl + data._id ;
    return this.httpClient.delete<Banner>(url);
  }

  // ads
  getAds(): Observable<any> {
    const categoryUrl = 'ads';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Ads>(url);
  }
  uploadAds(data , position): Observable<any> {
    const addUrl = 'ads/';
    const url: string = this.serviceUrl + addUrl + position ;
    return this.httpClient.put<boolean>(url, data);
  }
  deleteAds(data): Observable<any> {
    const deleteUrl = 'deleteads/';
    const url: string = this.serviceUrl + deleteUrl + data._id ;
    return this.httpClient.delete<Ads>(url);
  }

  // footer Details

  addFooterdetails(data: Footer): Observable<any> {
    const footerUrl = 'footer/';
    const url: string = this.serviceUrl + footerUrl ;
    return this.httpClient.post<Footer>(url, data);
  }
  uploadLogo(data , id): Observable<any> {
    const addUrl = 'createLogoImage/';
    const url: string = this.serviceUrl + addUrl + id ;
    return this.httpClient.put<boolean>(url, data);
  }

  getFooterDetails(): Observable<any> {
    const categoryUrl = 'footerDetails';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Ads>(url);
  }
  updateFooterDetails(data , id): Observable<any> {
    const addUrl = 'details/';
    const url: string = this.serviceUrl + addUrl + id ;
    return this.httpClient.put<Footer>(url, data);
  }

  // template
  addTemplateails(data): Observable<any> {
    const footerUrl = 'createTemplateImage';
    const url: string = this.serviceUrl + footerUrl ;
    return this.httpClient.post<TemplateDesign>(url, data);
  }

  getTemplateDetails(): Observable<any> {
    const categoryUrl = 'templateImages';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<TemplateDesign>(url);
  }

  // header

  addLogo(data): Observable<any> {
    const footerUrl = 'createLogoImage';
    const url: string = this.serviceUrl + footerUrl ;
    return this.httpClient.post<Header>(url, data);
  }

  getHeaderDetails(): Observable<any> {
    const categoryUrl = 'headerDetails';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Header>(url);
  }
}
