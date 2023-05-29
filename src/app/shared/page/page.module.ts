import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './topbar/topbar.component';
import { ClickOutSideDirective } from 'src/app/core/directives/clickoutside.directive';

@NgModule({
  declarations: [
    TopBarComponent,
    CarruselComponent,
    FooterComponent,
    ClickOutSideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopBarComponent,
    CarruselComponent,
    FooterComponent
  ]
})
export class PageModule { }
