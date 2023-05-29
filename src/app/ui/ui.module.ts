import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomePresenterProvider } from "../data/providers/home.provider";
import { ProductProvider } from "../data/providers/product.provider";
import { SharedModule } from "../shared/shared.module";
import { HomeInteractor } from "./home/interactor/home.interactor";
import { HomeComponent } from "./home/view/home.component";
import { homeRoutes } from "./ui.routing";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  providers: [
    ProductProvider,
    HomePresenterProvider,
    HomeInteractor
  ]
})
export class UIModule { }
