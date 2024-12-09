import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' }, // Redireciona a rota base para o componente de livros
  { path: 'books', component: BooksComponent }, // Rota para exibir a lista de livros
  { path: '**', redirectTo: '/books' } // Redireciona para /books qualquer rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule {}
