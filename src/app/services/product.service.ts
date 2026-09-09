import { Injectable } from '@angular/core';
import { Product } from '../initialization/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Wireless Mouse',
      image: 'assets/products/mouse.jpg',
      icon: 'mouse-outline',
      price: 799,
      description: 'A comfortable wireless mouse with long battery life.',
    },
    {
      id: '2',
      name: 'Mechanical Keyboard',
      image: 'assets/products/keyboard.jpg',
      icon: 'keypad-outline',
      price: 2499,
      description: 'A tactile mechanical keyboard great for typing and gaming.',
    },
    {
      id: '3',
      name: 'USB-C Hub',
      image: 'assets/products/hub.jpg',
      icon: 'hardware-chip-outline',
      price: 499,
      description: 'A compact hub with HDMI, USB-A, and SD card slots.',
    },
    {
      id: '4',
      name: 'HD Webcam',
      image: 'assets/products/webcam.jpg',
      icon: 'videocam-outline',
      price: 1199,
      description: 'A crisp 1080p webcam for calls and streaming.',
    },
    {
      id: '5',
      name: 'Portable SSD',
      image: 'assets/products/ssd.jpg',
      icon: 'save-outline',
      price: 3499,
      description: 'Fast external storage that fits in your pocket.',
    },
    {
      id: '6',
      name: 'Laptop Stand',
      image: 'assets/products/stand.jpg',
      icon: 'laptop-outline',
      price: 799,
      description: 'An adjustable aluminum stand for better posture and airflow.',
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find((p) => p.id === id);
  }
}
