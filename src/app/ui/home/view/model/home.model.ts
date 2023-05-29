import { CorePresenter } from "src/app/core/view/core.presenter";
import { Product } from "src/app/domain/entities/product.entity";

export abstract class HomeOutputLogic {
  products: Product[] = [];
  listCards: Product[] = [];
  offset: number = 0;
  limit: number = 4;
  cardOffset: number = 6;
  cardLimit: number = 12;
}

export interface HomeInputLogic extends CorePresenter {
  readProducts(offset: number, limit: number): void;
  readProductsForCards(offset: number, limit: number): void;
  emitValue(product: Product): void
  nextPage(): void;
  prevPage(): void;
}
