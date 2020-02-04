import { Component } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// import { products } from '../shared/products';
import { AlertService } from '../shared/_alert';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model'
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[];
  test;
  constructor(private alertService: AlertService,
    private productService: ProductService
  ) { }
  
  ngOnInit() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res as Product[];
    });
  }

  share(productName) {
    this.alertService.success(`"${productName}" has been shared!`);
    // window.alert(`"${productName}" has been shared!`);
  }

  onNotify(productName, test) {
    this.alertService.success(`You will be notified when the "${productName}" goes on sale`);
    this.test = test;
    console.log(test)
    // window.alert(`You will be notified when the "${productName}" goes on sale`);
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/