// src/app/books/books.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = {
    id: 0,
    title: '',
    author: '',
    gender: '',
    available: true,
  };

  editBook: Book | null = null; // Armazena o livro que está sendo editado

  constructor(
    private bookService: BookService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  // Carrega os livros chamando o serviço e assinando o Observable
  loadBooks(): void {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  // Adiciona um novo livro
  addBook(): void {
    if (this.newBook.title && this.newBook.author) {
      this.bookService.addBook(this.newBook).subscribe(() => {
        this.newBook = {
          id: 0,
          title: '',
          author: '',
          gender: '',
          available: true,
        };
        this.loadBooks(); // Recarrega os livros após adicionar
      });
    }
  }

  // Inicia a edição de um livro
  startEdit(book: Book): void {
    this.editBook = { ...book };
  }

  // Salva as alterações do livro editado
  saveEdit(): void {
    if (this.editBook) {
      this.bookService.updateBook(this.editBook).subscribe(() => {
        this.editBook = null;
        this.loadBooks(); // Recarrega os livros após editar
      });
    }
  }

  // Cancela a edição
  cancelEdit(): void {
    this.editBook = null;
  }

  // Deleta um livro
  deleteBook(id: number): void {
    if (confirm('Deseja realmente deletar este livro?')) {
      this.bookService.deleteBook(id).subscribe(() => {
        this.loadBooks(); // Recarrega os livros após deletar
      });
    }
  }

  // Alterna a disponibilidade de um livro
  toggleAvailability(id: number): void {
    this.bookService.toggleAvailability(id).subscribe(() => {
      this.loadBooks(); // Recarrega os livros após alternar disponibilidade
    });
  }
}
