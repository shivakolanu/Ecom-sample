import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // items = {};
  items = new Map();

  constructor(
    private http: HttpClient,
  ) { 
    this.items.set("Phone XL", { "quantity": 1, "price": 799 })
  }
  
  addToCart(product, product_count) {
    if (this.items.has(product.name)) {
      this.items.get(product.name)["quantity"] += product_count;
    }
    else {
      this.items.set(product.name, { "quantity": product_count, "price": product.price })
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
    return this.http.get('/assets/shipping.json');
  }
}