import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shipping } from './shipping.model'
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // items = {};
  shipping: Shipping;
  items = new Map();
  readonly baseURL = environment.baseUrl+'/shipping';

  constructor(
    private http: HttpClient,
  ) { 
    this.items.set("5e2e8e70268b69501c6b39b8", { "name": "Phone XL", "quantity": 1, "price": 799 })
    // this.items.set("5e2e8ecd0e04554a501b750a", { "name": "Phone Mini",  "quantity": 1, "price": 699 })
  }
  
  addToCart(product, product_count: number) {
    if (this.items.has(product._id)) {
      this.items.get(product._id)["quantity"] += product_count;
    }
    else {
      this.items.set(product._id, { "name": product.name ,"quantity": product_count, "price": product.price })
    }
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.clear();
    return this.items;
  }

  getShippingPrices() {
    return this.http.get(this.baseURL);
    // return this.http.get('/assets/shipping.json');
  }

  postShippingMethod(shipping :Shipping){
    localStorage.setItem('shipping',JSON.stringify(shipping))
  }
}