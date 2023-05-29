import { Component, Input } from '@angular/core';
import { Product } from 'src/app/domain/entities/product.entity';

@Component({
  selector: 'app-last-offers',
  templateUrl: './last-offers.component.html',
  host: {
    class: 'container-offers'
  }
})
export class LastOffersComponent {

  @Input() product: Product;
}
