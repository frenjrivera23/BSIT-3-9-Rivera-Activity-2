import { Component, OnInit } from '@angular/core';
import { Product } from '../initialization/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
  standalone: false,
})
export class CatalogPage implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}