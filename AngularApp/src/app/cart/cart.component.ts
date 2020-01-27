import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { CartService } from '../shared/cart.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items;
  checkoutForm;
  shipping;
  submitted = false;
  shippingValue = true;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.items = this.cartService.getItems();
    console.log(this.items)
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.shipping = params.shipping;
      });
  }

  get name() { return this.checkoutForm.get('name'); }
  get address() { return this.checkoutForm.get('address'); }

  onSubmit(customerData) {
    // Process checkout data here
    this.submitted = true;
    console.log(this.shipping)
    if(!this.shipping){
      this.shippingValue =false;
    }
    if (this.checkoutForm.invalid) {
      return;
    }
    
    console.warn('Your order has been submitted', customerData, this.items);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

  }
}