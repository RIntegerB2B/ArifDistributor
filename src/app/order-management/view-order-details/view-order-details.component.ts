import { Component, OnInit } from '@angular/core';
import {Route, ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {OrderManagementService} from '../order-management.service';
import {Order} from '../view-orders/order.model';

@Component({
  selector: 'app-view-order-details',
  templateUrl: './view-order-details.component.html',
  styleUrls: ['./view-order-details.component.css']
})
export class ViewOrderDetailsComponent implements OnInit {
  id;
orderModel: Order;
orderForm: FormGroup;
OrderStatus = ['Processing', 'OnHold', 'Completed' , 'Cancelled', 'Failed'];
  constructor(private router: Router,  private orderService: OrderManagementService, private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.createForm();
    this.viewOrderDetails();
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
}
