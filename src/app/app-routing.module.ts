import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main/main.component";
import { ShopComponent } from "./shop/shop.component";



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: MainComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
