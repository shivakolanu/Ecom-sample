import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[];
  readonly baseURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.baseURL);
  }
  getSpecificProduct(_id: string) {
    return this.http.get(this.baseURL+`/${_id}`);
  }
}
