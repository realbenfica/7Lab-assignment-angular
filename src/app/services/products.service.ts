import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Products } from '../models/Products'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
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
    return this.http.get<Products[]>(`${this.productsUrl}`);
  }

  // // Delete Todo
  // deleteTodo(todo: Todo): Observable<Todo> {
  //   const url = `${this.todosUrl}/${todo.id}`;
  //   return this.http.delete<Todo>(url, httpOptions);
  // }

  // // Add Todo
  // addTodo(todo: Todo): Observable<Todo> {
  //   return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  // }
  
  // // Toggle Completed
  // toggleCompleted(todo: Todo): Observable<any> {
  //   const url = `${this.todosUrl}/${todo.id}`
  //   return this.http.put(url, todo, httpOptions)
  // }
}
