import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input() selectedProduct: Product | null = null;
  @Output() productAdded = new EventEmitter<Product>();
  @Output() productUpdated = new EventEmitter<Product>();

  constructor(private productService: ProductService) {}
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    category: new FormControl('', Validators.required),
    stockQuantity: new FormControl(0, Validators.required),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedProduct'] && changes['selectedProduct'].currentValue) {
      const product = changes['selectedProduct'].currentValue;
      this.productForm.patchValue({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        stockQuantity: product.stockQuantity,
      });
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      const formValues = this.productForm.value;
      const newProduct: Product = {
        name: formValues.name!,
        description: formValues.description!,
        price: formValues.price!,
        category: formValues.category!,
        stockQuantity: formValues.stockQuantity!,
      };

      if (this.selectedProduct) {
        this.productService
          .updateProduct(this.selectedProduct._id!, newProduct)
          .subscribe({
            next: (updatedProduct) => {
              this.productUpdated.emit(updatedProduct);
              this.productForm.reset();
              alert('Product updated!');
            },
            error: (error) => {
              console.error('Error updating product:', error);
            },
          });
      } else {
        this.productService.createProduct(newProduct).subscribe({
          next: (createdProduct) => {
            this.productAdded.emit(createdProduct);
            this.productForm.reset();
            alert('Product created!');
          },
          error: (error) => {
            console.error('Error creating product:', error);
          },
        });
      }
    }
  }
}
