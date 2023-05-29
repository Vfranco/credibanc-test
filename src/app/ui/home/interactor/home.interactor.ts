import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductosRepository } from "src/app/data/repositories/products.repository";
import { Product } from "src/app/domain/entities/product.entity";
import { HomeInputLogic } from "../view/model/home.model";

@Injectable()
export class HomeInteractor {

  private _presenter: HomeInputLogic;

  constructor(
    @Inject('ProductosRepository') private _productService: ProductosRepository
  ) { }

  setPresenter(presenter: HomeInputLogic) {
    this._presenter = presenter;
  }

  read(offset: number, limit: number): Observable<Product[]> {
    return this._productService.getProducts(offset, limit);
  }
}
