import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import {Product} from './view-product/product.model';
import { AppLoadModule } from './../app-load/app-load.module';
import { AppLoadService } from '../app-load/app-load.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  serviceUrl: string = AppSetting.serviceUrl;

  constructor(private httpClient: HttpClient, private appLoadService: AppLoadService) {
   console.log(this.appLoadService.getSettings());
   }

  // getProducts

  getProducts(): Observable<any> {
    const categoryUrl = 'product';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Product>(url);
  }
}
