import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

import { products } from '../shared/products';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;
  modalRef: BsModalRef;
  count=1;
  // cartForm: FormGroup;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private modalService: BsModalService,
    private fb: FormBuilder,
  ) { 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  cartForm = this.fb.group({
    productCount: [this.count, Validators.compose([Validators.required,Validators.min(1)])]
  })
  
  // convenience getter for easy access to form fields
  get productCount() { return this.cartForm.get('productCount'); }

  decrement(){
    if(this.count >= 2) this.count = +this.count - 1; 
    this.cartForm.get('productCount').setValue(this.count);
  }
  increment(){
    this.count = +this.count + 1; 
    this.cartForm.get('productCount').setValue(this.count);
  }
  changeInput($event){
    this.count = $event.target.value; 
  }
  onSubmit(product, template: TemplateRef<any>){
    this.submitted = true;
    if (this.cartForm.invalid) {
        return;
    }
    this.modalRef = this.modalService.show(template);
    this.cartService.addToCart(product, this.cartForm.value.productCount);
  }
}