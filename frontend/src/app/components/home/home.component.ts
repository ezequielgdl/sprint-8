import { Component } from '@angular/core';
import { Product } from '../../interfaces';
import { ProductService } from '../../services/product.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  selectedProduct: Product | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((product) => product._id !== id);
    });
  }

  onProductSelected(product: Product): void {
    this.selectedProduct = product;
  }

  onProductUpdated(updatedProduct: Product): void {
    const index = this.products.findIndex(
      (product) => product._id === updatedProduct._id
    );
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
    this.selectedProduct = null; // Clear selected product after update
  }
}
