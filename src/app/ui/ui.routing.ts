import { Routes } from "@angular/router";
import { DetailComponent } from "./detail/view/detail.component";
import { HomeComponent } from "./home/view/home.component";
import { ShopComponent } from "./shop/view/shop.component";

export const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'detail', component: DetailComponent }
];
