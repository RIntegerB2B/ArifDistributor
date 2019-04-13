import { Component, OnInit } from '@angular/core';
import {Route, ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {OrderManagementService} from '../order-management.service';
import {Order} from '../view-orders/order.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
  id;
orderModel: Order;
orderForm: FormGroup;
productModel: any;
message;
action;
OrderStatus = ['New', 'Processing', 'OnHold', 'Completed' , 'Cancelled', 'Failed'];
  constructor(private router: Router,  private orderService: OrderManagementService, private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private fb: FormBuilder) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.createForm();
    this.viewOrderDetails();
    this.getProducts();
  }
  createForm() {
this.orderForm = this.fb.group({
orderedDate: [''],
statusType: ['']
});
  }
viewOrderDetails() {
  this.orderService.getSingleOrderDetails(this.id).subscribe(data => {
    this.orderModel = data[0];
  }, err => {
console.log(err);
  });
}
getProducts() {
  this.orderService.getProducts().subscribe(data => {
    this.productModel = data;
  }, err => {
    console.log(err);
  });
}
updateStatus()  {
  this.message = 'Order Updated';
  this.orderModel = new Order();
  this.orderModel.orderStatus = this.orderForm.controls.statusType.value;
  this.orderService.updateStatus(this.id, this.orderModel).subscribe(data => {
    this.orderModel = data[0];
    this.snackBar.open(this.message, this.action, {
      duration: 3000,
    });
    this.router.navigate(['orders/vieworders']);
  }, err => {
    console.log(err);
  });
}
}
