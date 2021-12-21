import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PreloaderComponent } from './preloader/preloader.component';
import { MainComponent } from './main/main.component';
import { ShopComponent } from './shop/shop.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BooksFilterPipe } from './shared/books-filter.pipe';
import { BookItemComponent } from './book-item/book-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookListComponent,
    PreloaderComponent,
    MainComponent,
    ShopComponent,
    BooksFilterPipe,
    BookItemComponent,
    BookDetailsComponent,
    HomeComponent
  ],
  imports: [
    [BrowserModule, FormsModule],
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
