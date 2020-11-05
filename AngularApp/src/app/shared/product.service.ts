import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[];
  readonly baseURL = environment.baseUrl+'/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.baseURL);
  }
  getSpecificProduct(_id: string) {
    return this.http.get(this.baseURL+`/${_id}`);
  }
}
