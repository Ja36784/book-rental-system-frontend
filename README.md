# Sistema de Locação de Livros
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Ja36784/book-rental-system/blob/main/LICENSE)

Este é um sistema simples de locação de livros desenvolvido utilizando Angular para o frontend e Node.js para o backend. O sistema permite que usuários visualizem uma lista de livros, adicionem novos títulos, editem informações dos livros, alterem a disponibilidade (locar/devolver) e removam livros. O objetivo é oferecer uma solução prática para o gerenciamento de uma pequena biblioteca ou coleção de livros.

## Tecnologias Utilizadas

### Frontend:

- Angular: Estrutura principal para desenvolvimento do frontend.

- TypeScript: Linguagem utilizada para a implementação de lógica e componentes.

- HTML/CSS: Estruturação e estilização dos componentes visuais.

- Bootstrap (opcional): Utilizado para estilização rápida e responsiva.

### Funcionalidades do Sistema:

- Visualizar Livros: Exibe uma lista de livros disponíveis no sistema.

- Adicionar Livro: Permite adicionar um novo livro com informações como título, autor e gênero.

- Editar Livro: Permite editar as informações de um livro existente.

- Deletar Livro: Permite remover um livro, com uma confirmação prévia.

- Alterar Disponibilidade: Permite marcar o livro como locado ou disponível.

## Frontend:

### Clone o repositório:

git clone https://github.com/seu-usuario/book-rental-system.git
cd book-rental-system/frontend

### Instale as dependências:

- npm install

### Execute o servidor de desenvolvimento:

- ng serve

Acesse o aplicativo:
- Abra o navegador e acesse http://localhost:4200.

### Como Usar

- Acesse a página principal para visualizar a lista de livros disponíveis e locados.

- Utilize o formulário para adicionar um novo livro, informando título, autor e gênero.

- Clique no botão "Editar" para alterar as informações de um livro.

- Clique no botão "Remover" para excluir um livro. O sistema solicitará uma confirmação antes de deletar.

- Use o botão "Locar/Devolver" para alternar a disponibilidade do livro.

### Personalização

O sistema pode ser personalizado para atender às suas necessidades específicas:

- Modelo de Livro: Adicione novos campos no modelo Book.

- Estilização: Alterações podem ser feitas no arquivo books.component.css.

- Funcionalidades Backend: Expanda os endpoints no arquivo server.js.

### Melhorias Futuras

Aqui estão algumas ideias para futuras implementações:

- Autenticação de Usuário: Limitar o acesso à edição e remoção para usuários autenticados.

- Sistema de Categorias: Classificar livros por categoria ou gênero.

- Filtragem e Pesquisa: Permitir que usuários filtrem ou pesquisem livros na lista.

- Histórico de Locações: Registrar histórico de locações e devoluções.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou reportar problemas no repositório. Certifique-se de seguir as melhores práticas de codificação e comentar seu código quando necessário.
