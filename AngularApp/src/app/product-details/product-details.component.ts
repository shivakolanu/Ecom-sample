import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { ProductService } from '../shared/product.service';
import { CartService } from '../shared/cart.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  modalRef: BsModalRef;
  count = 1;
  // cartForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productService.getSpecificProduct(params.get('productId')).subscribe((res) => {
        this.product = res as Product;
      },
        error => {
          this.router.navigate(['/**']);
          console.log(error);
        }
      );
    });
  }

  cartForm = this.fb.group({
    productCount: [this.count, Validators.compose([Validators.required, Validators.min(1)])]
  })

  // convenience getter for easy access to form fields
  get productCount() { return this.cartForm.get('productCount'); }

  decrement() {
    if (this.count >= 2) this.count = +this.count - 1;
    this.cartForm.get('productCount').setValue(this.count);
  }
  increment() {
    this.count = +this.count + 1;
    this.cartForm.get('productCount').setValue(this.count);
  }
  changeInput($event) {
    this.count = $event.target.value;
  }
  onSubmit(product, template: TemplateRef<any>) {
    this.submitted = true;
    if (this.cartForm.invalid) {
      return;
    }
    this.modalRef = this.modalService.show(template);
    this.cartService.addToCart(product, this.cartForm.value.productCount);
  }
}