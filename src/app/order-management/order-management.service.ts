import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import {Order} from './view-orders/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {
  serviceUrl: string = AppSetting.serviceUrl;

  constructor(private httpClient: HttpClient) {
   }

   // orders

   getAllOrders(): Observable<any> {
    const categoryUrl = 'allorders';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Order>(url);
  }
}
