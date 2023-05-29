import { Observable } from "rxjs";
import { Product } from "src/app/domain/entities/product.entity";

export interface ProductosRepository {
  getProducts(offset: number, limit: number): Observable<Array<Product>>
}
