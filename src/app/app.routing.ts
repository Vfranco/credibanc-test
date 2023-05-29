import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

const appRoute: Routes = [
  { path: '', loadChildren: () => import('./ui/ui.module').then(m => m.UIModule) }
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(appRoute, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouting { }
