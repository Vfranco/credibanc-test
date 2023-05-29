import { Component, Inject, OnInit } from "@angular/core";
import { HomeInputLogic, HomeOutputLogic } from "./model/home.model";
import { Product } from "src/app/domain/entities/product.entity";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends HomeOutputLogic implements OnInit {

  constructor(
    @Inject('HomePresenterProvider') private _presenter: HomeInputLogic
  ) {
    super();
    this._presenter.setView(this);
  }

  ngOnInit(): void {
    this.readPaginateProducts();
    this.readCardsProducts();
  }

  readPaginateProducts(): void {
    this._presenter.readProducts(this.offset, this.limit);
  }

  readCardsProducts(): void {
    this._presenter.readProductsForCards(this.cardOffset, this.cardLimit);
  }

  selectProductAction(product: Product): void {
    this._presenter.emitValue(product);
  }

  nextPageAction(): void {
    this._presenter.nextPage();
  }

  prevPageAction(): void {
    this._presenter.prevPage();
  }
}
