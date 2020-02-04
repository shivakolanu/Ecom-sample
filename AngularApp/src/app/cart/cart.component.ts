import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';

import { CartService } from '../shared/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items;
  shipping;
  submitted = false;
  shippingValue = true;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
  }

  checkoutForm = this.fb.group({
    cartForm: this.fb.array([

    ]),
    shippingDetailsForm: this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    })
  });

  ngOnInit() {
    this.shipping = JSON.parse(localStorage.getItem("shipping"));
    this.items = this.cartService.getItems();

    this.items.forEach((value: boolean, key: string) => {
      let fc = this.fb.control(value['quantity']);
      this.cartForm.push(fc);
    });
  }

  getEntries(){
    return Array.from(this.items.entries());
  }
  get name() { return this.checkoutForm.get('shippingDetailsForm.name'); }
  get cartForm() { return this.checkoutForm.get('cartForm') as FormArray; }
  get address() { return this.checkoutForm.get('shippingDetailsForm.address'); }

  decrement(itemKey, index) {
    if (+(this.cartForm.at(index).value) > 1) {
      var count = +(this.cartForm.at(index).value) - 1;
      this.items.forEach((value: boolean, key: string) => {
        if (key == itemKey) {
          value["quantity"] = count;
        }
      });
      this.cartForm.at(index).setValue(count);
    }
  }
  increment(itemKey, index) {
    var count = +(this.cartForm.at(index).value) + 1;
    this.items.forEach((value: boolean, key: string) => {
      if (key == itemKey) {
        value["quantity"] = count;
      }
    });
    this.cartForm.at(index).setValue(count);
  }
  changeInput(itemKey, $event) {
    var count = $event.target.value;
    this.items.forEach((value: boolean, key: string) => {
      if (key == itemKey) {
        value["quantity"] = count;
      }
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.submitted = true;
    if (!this.shipping) {
      this.shippingValue = false;
    }
    if (this.checkoutForm.invalid) {
      return;
    }
    
    console.warn('Your order has been submitted', customerData, this.items);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

  }
}