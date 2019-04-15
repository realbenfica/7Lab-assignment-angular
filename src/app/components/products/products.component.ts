import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products.data;
    });
  }

  deleteProduct(product: Products) {
    // Remover from UI
    this.products = this.products.filter(p => p.id !== product.id);
    // Remove from servers
    this.productService.deleteProduct(product).subscribe();
  }

  addProduct(product: Products) {
    this.productService.addProduct(product).subscribe(product => {
      this.products.push(product);
    })
  }
}
