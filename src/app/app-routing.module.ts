import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { MainComponent } from "./main/main.component";
import { ShopComponent } from "./shop/shop.component";



const routes: Routes = [
  {path: 'books', component: MainComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
