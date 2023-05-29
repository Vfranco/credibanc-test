import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/domain/entities/product.entity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  host: {
    class: 'container'
  }
})
export class CardComponent {
  @Input() card: Product;
  @Output() selectedProduct = new EventEmitter<Product>();

  onSelectedProduct(product: Product): void {
    this.selectedProduct.emit(product);
  }
}
