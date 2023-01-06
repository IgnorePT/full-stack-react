# Exercício: Formulário de Pesquisa de Produtos

Cria um formulário de pesquisa de produtos que permita aos utilizadores filtrar os produtos por nome, categoria e range de preço.  
O formulário deverá ter os seguintes campos:

* Nome: um campo de texto para pesquisar por produtos que contenham o nome introduzido (pode ser parcial)
* Categoria: um campo de seleção com uma lista de opções pré-definidas:
    * 1 - snickers
    * 2 - coats
    * 3 - pants
    * 4 - jackets
* Range de preço: dois campos de número para especificar o valor mínimo e máximo do preço.

Utiliza a [API](https://foxcoding.net/api/getProductsList) - https://foxcoding.net/api/getProductsList para receber os produtos e filtrar-los.

Sempre que o utilizador efectuar o clique no botão pesquisar este deve filtrar a listagem de produtos com os valores inseridos no fomulario.