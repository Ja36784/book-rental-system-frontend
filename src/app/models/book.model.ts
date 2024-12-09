// src/app/books/book.model.ts
export interface Book {
  id: number;            // ID único (sincronizado com o banco MySQL)
  title: string;         // Título do livro
  author: string;        // Autor do livro
  gender: string;        // Gênero literário
  available: boolean;    // Disponibilidade
  image?: string;        // URL opcional da imagem do livro   
  }