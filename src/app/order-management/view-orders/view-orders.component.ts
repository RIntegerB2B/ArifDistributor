import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from './order.model';
import { OrderManagementService } from '../order-management.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['order', 'view', 'date', 'status', 'total'];
  orderModel: any;
  orderDetails: Order[];
  allOrderCount;
  newOrderCount;
  activeOrderCount;
  completedOrderCount;
  cancelledOrderCount;
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
      this.completedOrderCount = this.orderDetails.filter(book => book.orderStatus === 'Completed').length;
      this.cancelledOrderCount = this.orderDetails.filter(book => book.orderStatus === 'Cancelled').length;
      console.log();
    }, err => {
      console.log(err);
    });
  }

  viewNewOrders() {
    this.orderModel =  this.orderDetails.filter(book => book.orderStatus === 'New');
  }

  viewActiveOrders() {
    this.orderModel =  this.orderDetails.filter(book => book.orderStatus === 'Active');
  }
  viewCompletedOrders() {
    this.orderModel =  this.orderDetails.filter(book => book.orderStatus === 'Completed');
  }
  viewCancelledOrders() {
    this.orderModel =  this.orderDetails.filter(book => book.orderStatus === 'Cancelled');
  }
  applyFilter(filterValue: string) {
    this.orderModel.filter = filterValue.trim().toLowerCase();
  }

   showOrderDetails(order) {
this.router.navigate(['orders/viewordersdetails', order._id ]);
  }
}
