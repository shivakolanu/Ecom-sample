import { Component, OnInit } from "@angular/core";
import { CartService } from "../shared/cart.service";
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.scss"]
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  @Output() emitShippingInfo = new EventEmitter();

  shippingForm: FormGroup;
  
  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ){
    this.shippingForm = this.fb.group({
      shippingItem: ['', Validators.required]
    })
    // this.shippingFrom = new FormGroup({
    //   shippingItem: new FormControl()
    // });
  }

  get myForm() {
    return this.shippingForm.get('shippingItem');
  }

  onSubmit() {
    if(!this.shippingForm.valid) {
      return false;
    } else {
      // alert(JSON.stringify(this.shippingForm.value))
      this.router.navigate(['cart'], { queryParams: { shipping: this.shippingForm.value.shippingItem } });
      // this.emitShippingInfo.emit(this.shippingForm.value)
    }
  }   
  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
  // shippingInfo(name){
  //   console.log(name);
  //   this.emitShippingInfo.emit()
  // }
}
