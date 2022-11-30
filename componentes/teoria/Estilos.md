# Estilos em React

Existem neste momento 3 formas de estilizar os nossos componentes em React

1. Inline Styles
2. Css Regular (com recurso a propriedade className)
3. CSS in JS


## Style Prop

Em HTML:

```html 

<!-- HTML -->
<div style="margin: 20px; background-color: red;"></div>

```

Em REACT:

```jsx 

//JSX
const div = <div style={{margin: 20, backgroundColor: 'red'}} />

```

Reparem que em React utilizamos `{{ ... }}` que é uma combinação entre uma expressão de JSX e um objeto em JS. Ou seja o que estamos a passar é um objeto dinamicamente para a expressao JSX. Poderiamos ter escrito o mesmo exemplo da seguinte forma:

```jsx 

//JSX
const divStyle = {
    margin: 20,
    backgroundColor: 'red'
}

const div = <div style={divStyle} />

```

Temos de ter de ter em atenção que ao escrevermos as propriedades que queremos passar deixamos de utilizar o `kebab-cased (margin-top: xxx)` e passamos a utilizar `camelCased (marginTop: xxx)`. Esta prop de estilo é mapeada para a reperentação correspondente em DOM Nodes.

Mais informação em [CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)


## ClassName prop

Como discutimos anteriormente em HTML nos utilizamos o sistema de classes para identificarmos um elemento para mais tarde ser modificado com recurso a `CSS`.

Em `JSX` implementamos o mesmo sistema mas com recurso a prop `className` de React,isto porque como foi falado a palavra `class` é reservada em JS.

`HTML`
```CSS 
 /* Ficheiro CSS - style.css */
 .box{
        width: 100px;
        height: 100px;
        background-color: blue;
    }

```

```HTML
<!-- Utilização em HTML -->
<div class="box"></div>
```

`JSX`
```CSS 
 /* Ficheiro CSS - style.css */
 .box{
        width: 100px;
        height: 100px;
        background-color: blue;
    }

```

```JSX
// Utilização em JSX
const div = <div className="box"></div>
```


