import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Product } from "src/app/domain/entities/product.entity";

@Injectable({ providedIn: 'root' })
export class BroadCastService {

  private mySubject: BehaviorSubject<any> = new BehaviorSubject(null);

  emitValue(product: Product): void {
    this.mySubject.next(product);
  }

  getObservable(): Observable<Product> {
    return this.mySubject.asObservable();
  }
}
