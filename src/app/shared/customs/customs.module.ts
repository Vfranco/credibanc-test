import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LastOffersComponent } from './last-offers/last-offers.component';
import { MenuComponent } from './menu/menu.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    MenuComponent,
    LastOffersComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    LastOffersComponent,
    CardComponent
  ]
})
export class CustomsModule { }
