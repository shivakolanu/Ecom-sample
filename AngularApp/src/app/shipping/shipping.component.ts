import { Component, OnInit } from "@angular/core";
import { CartService } from "../shared/cart.service";
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

import { Shipping } from '../shared/shipping.model'

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.scss"]
})
export class ShippingComponent implements OnInit {
  shippingTypes: Shipping[];

  @Output() emitShippingInfo = new EventEmitter();

  shippingForm: FormGroup;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    var shipping = JSON.parse(localStorage.getItem("shipping"));
    if(JSON.parse(localStorage.getItem("shipping"))){
      this.shippingForm = this.fb.group({
        shippingMethod: [shipping.type, Validators.required]
      }) 
    }
    else{
      this.shippingForm = this.fb.group({
        shippingMethod: ['', Validators.required]
      })
    } 
    // this.shippingFrom = new FormGroup({
    //   shippingMethod: new FormControl()
    // });
  }

  get myForm() {
    return this.shippingForm.get('shippingMethod');
  }

  onSubmit() {
    if (!this.shippingForm.valid) {
      return false;
    }
    else {
      for (let shipping of this.shippingTypes) {
        if (this.shippingForm.value.shippingMethod == shipping["type"]) {
          this.cartService.postShippingMethod(shipping);
        } 
      }
      
      this.router.navigate(['cart']);
      // this.emitShippingInfo.emit(this.shippingForm.value)
    }
  }
  ngOnInit() {
    this.cartService.getShippingPrices().subscribe((res) => {
      this.shippingTypes = res as Shipping[];

      for (let shipping of this.shippingTypes) {
        if (this.shippingForm.value.shippingMethod == shipping["type"]) {
          this.cartService.shipping = shipping;
        } 
      }
    });

    // this.shippingTypes = this.cartService.getShippingPrices();
  }
  // shippingInfo(name){
  //   console.log(name);
  //   this.emitShippingInfo.emit()
  // }
}
