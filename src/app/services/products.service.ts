import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Products } from '../models/Products'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('assessment@7lab.nl:secret'),
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsUrl: string = 'https://assessment.7apps.nl/api/products';

  constructor(private http: HttpClient) { }

  // Get Products
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.productsUrl}`, httpOptions);
  }

  // Add Product
  addProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(this.productsUrl, product, httpOptions);
  }
  
  // Delete Product
  deleteProduct(product: Products): Observable<Products> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.delete<Products>(url, httpOptions);
  }
}
