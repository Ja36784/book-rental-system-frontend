# Sistema de Locação de Livros
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Ja36784/book-rental-system/blob/main/LICENSE)

Este é um sistema simples de locação de livros desenvolvido com Angular. Ele permite que usuários visualizem uma lista de livros, adicionem novos títulos, editem informações dos livros, alterem a disponibilidade (locar/devolver) e removam livros.

## Tecnologias Utilizadas
- Angular - Estrutura principal do projeto
- TypeScript - Linguagem utilizada para o desenvolvimento
- HTML/CSS - Estrutura e estilo dos componentes
- Bootstrap (opcional) - Para estilização rápida

## Funcionalidades
- Visualizar Livros: Exibe uma lista de livros disponíveis no sistema.
- Adicionar Livro: Permite adicionar um novo livro com título, autor e gênero.
- Editar Livro: Permite editar as informações de um livro existente.
- Deletar Livro: Pergunta ao usuário se ele deseja realmente deletar um livro antes de removê-lo.
- Alterar Disponibilidade: Permite marcar o livro como locado ou disponível.

# Instalação
Siga os passos abaixo para instalar e executar o projeto localmente:

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/book-rental-system.git
cd sistema-locacao-livros

Instale as dependências:
Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

npm install
Execute o servidor de desenvolvimento:

ng serve

Acesse o aplicativo:
Abra o navegador e acesse http://localhost:4200.
```
## Como Usar
- Acesse a página principal para visualizar a lista de livros.
- Utilize o formulário para adicionar um novo livro, informando título, autor e gênero.
- Clique em Editar para alterar as informações de um livro.
- Clique em Remover para excluir um livro (será solicitado uma confirmação).
- Use o botão Locar/Devolver para alternar a disponibilidade do livro.

## Personalização
- Você pode personalizar este sistema de acordo com suas necessidades, como:
- Adicionar novos campos no modelo Book.
- Alterar o estilo no arquivo books.component.css.
- Expandir as funcionalidades no serviço book.service.ts.

## Melhorias Futuras
- Aqui estão algumas sugestões de recursos para melhorar o projeto:
- Autenticação de Usuário: Limitar o acesso à edição e remoção para usuários autenticados.
- Sistema de Categorias: Classificar livros por categoria ou gênero.
- Filtragem e Pesquisa: Permitir que usuários filtrem ou pesquisem livros.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou reportar problemas no repositório.
