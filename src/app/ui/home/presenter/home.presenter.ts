import { Injectable } from "@angular/core";
import { Product } from "src/app/domain/entities/product.entity";
import { HomeInteractor } from "../interactor/home.interactor";
import { HomeInputLogic, HomeOutputLogic } from "../view/model/home.model";
import { BroadCastService } from "src/app/core/services/broadcast.service";

@Injectable()
export class HomePresenter implements HomeInputLogic {

  private _view: HomeOutputLogic;

  constructor(
    private _interactor: HomeInteractor,
    private _broadcastservice: BroadCastService
  ) {
    this._interactor.setPresenter(this);
  }

  setView(component: HomeOutputLogic): void {
    this._view = component;
  }

  readProducts(offset: number, limit: number): void {
    this._interactor.read(offset, limit).subscribe((products: Product[]) => {
      this._view.products = products;
    });
  }

  readProductsForCards(offset: number, limit: number): void {
    this._interactor.read(offset, limit).subscribe((products: Product[]) => {
      this._view.listCards = products;
    });
  }

  emitValue(product: Product): void {
    this._broadcastservice.emitValue(product);
  }

  nextPage(): void {
    this._view.offset = this._view.offset + this._view.limit;
    this.readProducts(this._view.offset, this._view.limit);
  }

  prevPage(): void {
    this._view.offset = this._view.offset - this._view.limit;
    this.readProducts(this._view.offset, this._view.limit);
  }
}
