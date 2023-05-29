import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductosRepository } from "src/app/data/repositories/products.repository";
import { Product } from "src/app/domain/entities/product.entity";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductService implements ProductosRepository {

  constructor(private _http: HttpClient) { }

  getProducts(offset: number, limit: number): Observable<Product[]> {
    return this._http.get<Product[]>(`${environment.API}/products?offset=${offset}&limit=${limit}`);
  }
}
