// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importe FormsModule aqui
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, BooksComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Adicione isto para que as rotas funcionem
  ],

  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
