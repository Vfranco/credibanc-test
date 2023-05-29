import { NgModule } from "@angular/core";
import { CustomsModule } from "./customs/customs.module";
import { PageModule } from "./page/page.module";

@NgModule({
  imports: [CustomsModule, PageModule],
  exports: [CustomsModule, PageModule]
})
export class SharedModule { }
