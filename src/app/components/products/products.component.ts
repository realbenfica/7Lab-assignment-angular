import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Products[];

  constructor(private todoService:ProductsService) { }

  ngOnInit() {
    this.todoService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  // deleteTodo(todo:Todo) {
  //   // Remover from UI
  //   this.todos = this.todos.filter(t => t.id !== todo.id);
  //   // Remove from servers
  //   this.todoService.deleteTodo(todo).subscribe();
  // }

  // addTodo(todo:Todo) {
  //   this.todoService.addTodo(todo).subscribe(todo => {
  //     this.todos.push(todo);
  //   })
  // }

}
