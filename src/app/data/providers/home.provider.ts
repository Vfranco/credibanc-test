import { Provider } from "@angular/core";
import { HomePresenter } from "src/app/ui/home/presenter/home.presenter";

export const HomePresenterProvider: Provider = {
  provide: 'HomePresenterProvider',
  useClass: HomePresenter
}
