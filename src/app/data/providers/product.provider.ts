import { Provider } from "@angular/core";
import { ProductService } from "src/app/core/services/product.service";

export const ProductProvider: Provider = {
  provide: 'ProductosRepository',
  useClass: ProductService
}
