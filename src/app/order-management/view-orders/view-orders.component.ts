import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from './order.model';
import { OrderManagementService } from '../order-management.service';
import {Router, ActivatedRoute} from '@angular/router';
import { MatPaginator, MatTableDataSource , MatSort} from '@angular/material';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['order', 'date', 'status', 'total'];
  /* orders = [{
    type: 'All',
    value: 'All Orders'
  }, {
    type: 'New',
    value: 'New Orders'
  }, {
    type: 'Active',
    value: 'Active Orders'
  }, {
    type: 'Completed',
    value: 'Completed Orders'
  }, {
    type: 'Cancelled',
    value: 'Cancelled Orders'
  }]; */
  orderModel: any;
  orderDetails: Order[];
   allOrderCount;
  newOrderCount;
  activeOrderCount;
  constructor(private router: Router, private orderService: OrderManagementService) { }

  ngOnInit() {
    this.viewOrders();
  }
  /* viewDetails(data) {
    this.router.navigate(['orders/viewordersdetails', data.type]);
  } */

  viewOrders() {
this.orderService.getAllOrders().subscribe(data => {
  this.orderDetails = data;
  this.allOrderCount = data.length;
  this.orderModel = data;
  this.orderModel = new MatTableDataSource<Order>(data);
  this.orderModel.sort = this.sort;
  this.orderModel.paginator = this.paginator;
  this.newOrderCount = this.orderDetails.filter(book => book.orderStatus === 'New').length;
  this.activeOrderCount = this.orderDetails.filter(book => book.orderStatus === 'Active').length;
 console.log();
}, err => {
  console.log(err);
});
  }
}
