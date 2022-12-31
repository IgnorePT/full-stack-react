# React Router

Como sabemos o React foi criado maioritariamente para resolver um problema, a criação de SPA's (Single Page Aplications), e apesar de estas se parecerem com sites com multiplas páginas o que acontece é que na realidade não passam de um website numa unica página onde os componentes são renderizados condicionalmente. o que acontece é que estas páginas não necessitam de modificar o seu `path relativo` (ex: https://mail.google.com/mail/u/0/).

Mas então como conseguimos criar uma aplicação em SPA que se comporte como uma aplicação com multiplas paginas.  
Exemplos de rotas multipagina : qualquer site que modifique o seu paht relativo ex: https://www.kuantokusta.pt/ página principal, página de melhores preços https://www.kuantokusta.pt/melhores-precos.

Para isso necessitamos importar uma biblioteca externa que nos permita adicionar essa funcionalidade no React.

## Introdução ao React Router DOM

Para adicionarmos a funcionalidade existem diversas bibliotecas para este efeito contudo vou-vos mostrar a mais utilizada REACT ROUTER DOM.

### Instalação

Para podermos utilizar precisamos de adicionar esta biblioteca ao nosso projeto. Para isso podemos adicionar com recurso aos packages NPM.

```sh
npm install react-router-dom
```

Depois de termos intalada essa dependencia podemos passar a utilizar no nosso projeto bastando importar no nosso ficheiro.

```JSX
import React, { Component } from 'react';
//Importação da biblioteca para utilização
import { BrowserRouter } from 'react-router-dom';
```

Mas depois de importar como podemos utilizar este recurso.

Imaginemos que queremos criar uma aplicação com duas paginas uma "pagina inicial" e uma "pagina about".

Para podermos utilizar este recurso primero precisamos de compreender como podemos utilizar esta biblioteca.  
Em React a maioria das bibliotecas permitem aceder as suas funcionalidades englobando "fazendo Wrap" da nossa aplicação em um componente no nosso caso precisamos de englobar a nossa aplicação no componente `<BrowserRouter>`, vejam o exemplo aseguir:

```JSX
//INDEX.JS - CRA
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)

// MAIN.JSX - VITE
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
     <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
   </React.StrictMode>
);
```

Normalmente iremos englobar a nossa aplicação no ficheiro principal do nosso projeto (main.jsx, ou index.js). Uma vez definido podemos ter acesso as funcionalidades de do React-dom-router em qualquer parte da nossa aplicação.

## Definindo Rotas

O próximo passo para criarmos a nossa aplicação "multipage" será a de criarmos as nossas rotas.  
Uma vez condigurado o `<BroeserRouter>` podemos definir as nossas rotas em qualquer sitio da nossa aplicação, contudo uma boa regra é fazermos isso num componente de alto nivel e não num elemento demasiado abaixo da arvore.  
Vamos então ver como se definem as rotas:

```JSX
//Importação dos componentes Routes & Route do React-router-dom
import { Route, Routes } from "react-router-dom"

//Importação dos nossos componentes
import { ComponenteHome } from "./ComponenteHome"
import { ComponenteAbout } from "./ComponenteAbout"

export function App() {
  return (
    //Componente para inciarmos a criação de rotas
    <Routes>
     {/* Rota individual que pretendemos criar*/}
      <Route path="/" element={<ComponenteHome />} />
      <Route path="/books" element={<ComponenteAbout />} />
    </Routes>
  )
}
```

Para criamos uma rota simplesmenta utilizarmos o componente `<Route>` sendo que este terá sempre de ser um filho do componente `<Routes>`.  
O que irá acontecer é que sempre que navegarmos no browser para uma pagina da aplicação o React vai validar e ler ao componente `<Route>` se esse path existe ou não e renderizar o elemento que lhe indicamos na propriedade element.  
O react router é inteligente o suficiente para só renderizar os componentes dentro de essa rota. O resto dos componentes não vão sofrer alterações.

### Arquitectura de uma route

O componente `<Route>` recebe 2 parametros principais o `path` e o `element`.

- Path: a propriedade path recebe o url relativo que pretendemos criar. no caso do exemplo teremos a path `/` para a página inicial e o path `/about` para a nossa página about.

## Criar links de navegações

O ultimo passo a termos em consideração é a criação da nossa navegação interna isto é criarmos os links que nos permitem navegar entre as páginas sem termos a necessidade de renderizar o resto dos componentes.  
O react-router-dom dá-nos acesso a um componente que nos permite fazermos isto o componente `<Link>`

Vamos ver um exemplo:

```jsx
//Importação dos componentes Routes , Route & Link do React-router-dom
import { Route, Routes, Link } from "react-router-dom";

//Importação dos nossos componentes
import { ComponenteHome } from "./ComponenteHome";
import { ComponenteAbout } from "./ComponenteAbout";

export function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/books">About</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<ComponenteHome />} />
				<Route path="/about" element={<ComponenteAbout />} />
			</Routes>
		</>
	);
}
```

Então para efetuarmos um sistema de navegação podemos utilizar em qualquer parta da nossa aplicação o componente `<Link>` (terá sempre de ser importado) e na propriedade `to` nesta propriedade temos de passar o path para o componente que pretendemos renderizar, se conseguirem perceber a propriedade to funciona muito semelhante a propriedade `href` dos links normais de HTML.

No exemplo acima descrito adicionamos 2 links um para cada um dos paths que definimos. Mas reparem que o componente de navegação não se encontra englobado dentro do componente Routes o que significa que não será modificado na proxima renderização.

## Rotas dinamicas

Existe um conjunto de tecnicas mais complexas que precisamos de implementar quando estamos a desenvolver websites mais completos.  
Nem sempre é possivel so termos rotas "estaticas" que apontem para um recurso e por vezes temos a necessidade de passarmos dados que nos permitam criar páginas que são modificadas consoante esses dados são passados.  
Um bom exemplo de esta situação é por exemplo o caso das lojas online.  
As lojas online normalmente possuem rotas dinamicas que nos permitem passar um identificadores de recursos, que são unicos e que por exemplo permitem com recursos aos mesmos componentes passar informação dinamica para os preencher.

Vamos ver como podemos criar rotas dinamicas com recurso a ao React Router Dom e depois conseguir consumir essa informação nos nossos componentes.

Imaginem que estamos a construir um sistema para um site de livros. Vamos ver como podemos criar um sistema de rotas que nos permitam passar elementos dinamicos para os paths para mais tarde serem lidos.

Seria impossivel criar uma aplicação com todas as combinações possiveis de livros por isso utilizamos este sistema de indentificadores unicos que nos permitem identificar o livro mas reaproveitar uma rota existente e modificando so uma pequena parte de essa rota.

Vajamos o exemplo:

```jsx
//Importação dos componentes Routes , Route & Link do React-router-dom
import { Route, Routes, Link } from "react-router-dom";

//Importação dos nossos componentes
import { Home } from "./Home";
import { BookList } from "./BookList";
import { Book } from "./BookList";

export function App() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/books">Books</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/books" element={<BookList />} />
					<Route path="/books/:id" element={<Book />} />
				</Routes>
			</Routes>
		</>
	);
}
```

No exemplo anterior podemos reparar que existe uma rota que possui um caracter diferente dos anteriores. a rota é a `/books/:id`, nesta rota os `:id` é um identificador dinamico onde podemos passar o ID do nosso livro para mais tarde ser lido pela nossa aplicação.

Mas então como podemos utilizar estes valores dinamicos dentro da nossa aplicação.

### useParams - React Router Dom

Para podermos acceder a aos recursos dinamicos podemos utilizar um Hook criado especificamente para o efeito para isso é necessario importart este Hook do react-router-dom. Vamos ver um exemplo:

```jsx
//Componente <Book> -
//Importamos o nosso Hook do "React Router Dom
import { useParams } from "react-router-dom";

export function Book() {
	// Aqui podemos utilizar este hook para irmos buscar os parametros que foram passados dinamicamente
	const { id } = useParams();

	return <h1>Book {id}</h1>;
}
```

O Hook `useParams` não recebe nenhuma atributo ao invocarmos ele ira retornar todos os valores dinamicos que foram passados
