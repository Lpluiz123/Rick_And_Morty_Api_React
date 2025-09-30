# Galeria de Personagens Rick and Morty

<p align="center">
  <img src="https://img.shields.io/github/license/[SEU-USUARIO-GITHUB]/[NOME-DO-REPOSITORIO]" alt="Licença">
  <img src="https://img.shields.io/github/languages/top/[SEU-USUARIO-GITHUB]/[NOME-DO-REPOSITORIO]" alt="Linguagem Principal">
  <img src="https://img.shields.io/github/last-commit/[SEU-USUARIO-GITHUB]/[NOME-DO-REPOSITORIO]" alt="Último Commit">
</p>

> Uma aplicação web simples e interativa para explorar os personagens do universo de Rick and Morty através da API pública da série.

<br>

## 📜 Sobre o Projeto

Este é um projeto front-end desenvolvido em **React** que consome a [The Rick and Morty API](https://rickandmortyapi.com/) para exibir uma galeria de personagens. A aplicação foi criada para praticar e demonstrar conceitos importantes do React, como a criação de **Hooks customizados**, componentização, manipulação de estado e consumo de APIs.

A navegação entre as páginas de personagens é gerenciada através de parâmetros na URL (`?page=X`), proporcionando uma experiência de usuário fluida e permitindo que o estado da página seja compartilhado.

<br>

## ✨ Funcionalidades

-   ✅ **Listagem de Personagens:** Exibe os personagens em um layout de grade, mostrando imagem, nome, espécie e localização.
-   ✅ **Paginação Dinâmica:** Botões de "Próximo" e "Anterior" para navegar por todas as páginas de resultados da API.
-   ✅ **Feedback de Carregamento:** Um *loader* animado é exibido enquanto os dados dos personagens estão sendo buscados.
-   ✅ **Tratamento de Erros:** Exibe uma mensagem de erro amigável caso ocorra uma falha na comunicação com a API.
-   ✅ **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
-   ✅ **Hooks Customizados:** O projeto utiliza hooks customizados (`useFetch` e `useChangePage`) para abstrair e reutilizar a lógica de busca de dados e controle de paginação.

<br>

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

-   **[React](https://react.dev/)**: Biblioteca principal para a construção da interface.
-   **[React Router DOM](https://reactrouter.com/)**: Utilizado para gerenciar os parâmetros de busca da URL (`useSearchParams`) e controlar a paginação.
-   **JavaScript**: Linguagem base da aplicação.
-   **CSS3**: Para estilização, utilizando Grid Layout, Flexbox e Media Queries para responsividade.
