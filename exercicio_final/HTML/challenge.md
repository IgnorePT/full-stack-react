# Exercicio Final
O objetivo de este exercicio é replicar a aplicação HTML/CSS e transforma em uma aplicação react.  
Podes  utilizar CRA ou VITE para o efeito, são necessarias reproduzir estas tres páginas.
- Home Page (index.html)
- Listagem de Produtos (productlist.html)
- Página de produto (product.html)  

### API
A API esta alojada em https://foxcoding.net/api/. Existem 2 endpoints:
* Listagem de Produtos - https://foxcoding.net/api/getProductsList
* Produtos individuais - https://foxcoding.net/api/getProduct?id=1 (Necessario passar o parametro **id**)

Documentação disponivel em: https://foxcoding.net/docs/

## Home Page (1/3)
* Replica os componentes estaticamente, não necessitas de chamar nenhuma API ou sistema.
* O objetivo é a criação de componentes estaticos simples. (Dumb components)

## Listagem de Produtos (2/3)

* [API](https://foxcoding.net/api/getProductsList) - https://foxcoding.net/api/getProductsList
* Popular a página com recurso a API. 
* Ao carregar nos filtros deve filtrar a listagem atual de produtos.
* Ao carregar num fitro ativo deve remover o filtro atual e voltar a apresentar toda a listagem de produtos.
* todos os produtos devem apontar para a sua página de produto correta ou seja o link de navegação deve ser para a página individual do produto correspondente.

### Notas

* Ids de categorias disponiveis:
    * 1 - snickers
    * 2 - coats
    * 3 - pants
    * 4 - jackets


## Página de Produtos (3/3)

* [API](https://foxcoding.net/api/getProduct?id=1)
* A página de produtos deve ser alimentada com recurso ao endpoint https://foxcoding.net/api/getProduct?id=1 onde o id é o parametro a ser passado dinamicamente na página.
* A informação do Enpoint deve ser mapeada para o campo correspondente nos componentes.

### Notas

* Os Tamanhos disponiveis para os produtos devem corresponder aos tamanhos de cada produto
* EXTRA - Criar o sistema de Rating por estrelas, o valor deve ser arredondado para cima, ou seja rating 2.5 deve apresentar 3 estrelas


## Pontos extra

Em analise...