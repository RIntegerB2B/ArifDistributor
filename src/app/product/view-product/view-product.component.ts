import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource , MatSort} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material';

import { ProductService } from '../product.service';
import { Product } from './product.model';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['primeImage', 'productName', 'styleCode', 'skuCode', 'qty'];
  productModel: Product;
  subProductModel: Product;
  productNameFilter = new FormControl('');
  productSkuCodeFilter = new FormControl('');
  productData;
  message;
  action;
  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService, private snackBar: MatSnackBar) { }


  ngOnInit() {
    this.getProducts();
    this.subProductModel = new Product();
    this.subProductModel.productName = '';
    this.subProductModel.skuCode = '';
    this.productNameFilter.valueChanges
    .subscribe(
      productName => {
        this.subProductModel.productName = productName;
        this.productData.filter = JSON.stringify(this.subProductModel);
      }
    );
    this.productSkuCodeFilter.valueChanges
    .subscribe(
      skuCode => {
        this.subProductModel.skuCode = skuCode;
        this.productData.filter = JSON.stringify(this.subProductModel);
      }
    );
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.productData = new MatTableDataSource<Product>(data);
      this.productData.sort = this.sort;
      this.productData.paginator = this.paginator;
      this.productData.filterPredicate = this.createProductFilter();
    }, err => {
      console.log(err);
    });
  }
  createProductFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function(data, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return data.productName.toLowerCase().indexOf(searchTerms.productName) !== -1 &&
      data.skuCode.toLowerCase().indexOf(searchTerms.skuCode) !== -1;
    };
    return filterFunction;
  }
  applyFilter(filterValue: string) {
    this.productData.filter = filterValue.trim().toLowerCase();
  }

}
