import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { BroadCastService } from "src/app/core/services/broadcast.service";
import { Product } from "src/app/domain/entities/product.entity";

@Component({
  selector: 'top-bar',
  templateUrl: './topbar.component.html',
  host: {
    class: 'topbar'
  }
})
export class TopBarComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  subscription: Subscription;
  totalPrice: number = 0;
  listProducts: Product[] = []
  toggleShopCartResume: boolean = false;

  constructor(private _broadCastService: BroadCastService) { }

  get setNotification(): number {
    return this.listProducts.length - 1;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.subscription = this._broadCastService.getObservable().subscribe(product => {
      this.products.push(product);
      this.getTotalPrice(this.products);
      this.getProducts(this.products);
    });
  }

  getTotalPrice(products: Product[]): void {
    this.totalPrice = products.reduce((prevValue, currentValue) =>
      (currentValue?.price) ? prevValue + currentValue.price : 0, 0)
  }

  getProducts(products: Product[]): void {
    this.listProducts = products.filter((value, index, self) => {
      if (!value)
        return true;
      else {
        const serializeValue = JSON.stringify(value);
        return (
          self.findIndex((obj) => JSON.stringify(obj) === serializeValue) === index
        )
      }
    });
  }

  removeElement(product: Product): void {
    const index = this.listProducts.findIndex((value) => value?.id === product?.id);
    this.listProducts.splice(index, 1);
    this.products.splice(index, 1);
    this.getTotalPrice(this.products);
  }

  closeOptions($event: any): void {
    this.toggleShopCartResume = false;
  }

  openShopCartResume(): void{
    this.toggleShopCartResume = true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
