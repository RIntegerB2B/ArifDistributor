import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import {Order} from './view-orders/order.model';
import {Product} from '../product/view-product/product.model';

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

  getSingleOrderDetails(id): Observable<any> {
    const categoryUrl = 'orders/';
    const url: string = this.serviceUrl + categoryUrl + id;
    return this.httpClient.get<Order>(url);
  }
  getSingleCustomerDetails(id): Observable<any> {
    const categoryUrl = 'customers/';
    const url: string = this.serviceUrl + categoryUrl + id;
    return this.httpClient.get<Order>(url);
  }
  getProducts(): Observable<any> {
    const categoryUrl = 'product';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Product>(url);
  }

  // update Status

  updateStatus(id, order: Order): Observable<any> {
    const categoryUrl = 'statusupdate/' + id;
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.put<Product>(url, order);
  }
}
