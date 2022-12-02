# Componentes

Sendo React uma biblioteca de front-end baseada em componentes significa que todas as parte da nossa aplicação são pequenos componentes divididos por diversos ficheiros.

## O que são componentes?

Componentes em React não são nada mais pequenos pedaços da nossa interface grafica.  
Toda aplicação em react é uma arvore de componentes, que nos permitem dividir a interface em componentes independentes e reutilizaveis. Por isso quando contruimos aplicações em React o que estamos a produzir é um conjunto de componentes isolados e reutilizaveis, que depois são combinados para criar aplicações complexas.

### Exemplo de componentes
![exemplo de componentes](https://foxcoding.net/edit/components_example.png)

Imaginem que seria voces a criar o proximo Youtube como dividiriam esta interface?  
Como fariam para reaproveitar o máximo de codigo possivel.

## Tipos de componentes

Em React existem duas formas de criarmos componentes os **Class Components** e os **Functional Components**

### Class Components

Os class components como o nome indica são componentes baseados em classes de javascript, Classes são "funções especiais" estando subdivididas em duas tipologias as `Class Expresions` e as `Class Declarations` (Mais informação no documento sobre classes)

[Classes MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)


### Exemplo de Class Components

```jsx
// Normal Class Component

import React, {Component} from 'react

class ClassComponent extends Component {

    /* Aqui inserimos toda a logica que respeita a este componente - Life Cycle methods, funcões privadas e Contrutores */


    /* Metodo obrigatorio para renderizar este componente */

    render(){
        return <div>Isto é um Class Component!</div>
    }
}

```

Este tipo de declaração de componentes tem vindo a entrar em desuso, e tem sido substituida pela declaração utilizando  `Functional Components`, tudo graças ao lançamento de `Hooks` em React 16 que nos permitiram ter acesso as mesmas funcionalidades de life cycles em componentes funcionais.

### Functional Components
Funtional componentes como o proprio nome indica não são mais que compomponentes criado atraves de funções, o retorno dessa função é o elemento que pretendemos renderizar.

### Exemplo de Functional Components
```jsx
// Em certos ambientes ja se torna descenessario fazer a importação de react
import React from 'react'

const FunctionalComponent = () =>  {

    /* Lógica da aplicação  - Hooks,estados, metodos, variaveis */


    /* Para renderizar o componente basta retornar o elemento JSX que queremos apresentar */

    return <div>Isto é um Functional Component!</div>
}
```

*Nota: podemos usar qualquer tipo de função para declarar um functional component: arrow functions, named functions, ou uma função normal

## Utilização de componentes em JSX

Depois de criados os nossos componentes são de utilização facil

```jsx 

const App = () => {
    const appName = "Mega App"
    return (
        <main>
        <h1>{appName}</h1>
        </main>
    )
}

// Como Utilizamos 

<App />
<App></App>


```


## Props

Para conseguirmos que os componentes aceitem diferentes tipos de dados podemos utilizar um recurso interno as Props.  
Props são argumentos que são passados para os nossos componentes em React

Props são passados aos nossos componentes como os atributos HTML. Podemos passar componentes de pais para filhos mas não é possivel passarmos de filhos para pais.

A informação passada como props é read-only isto é não pode ser modificada pelo componente que a recebe.

`props = propriedades`

```jsx 

const App = (props) => {
    const appName = props.title;
    return (
        <main>
        <h1>{appName}</h1>
        </main>
    )
}

// Como Utilizamos 

<App title="title" />


```

## Renderização condicional

Os nossos componentes muitas vezes precisam de apresentar diferente tipos de conteudo dependendo de certas condições.  
Em React podemos apresentar diferente tipo conteudo em JSX com recurso a Javascript simplesmente utilizando condições `if/else` ou com recurso a `operador ternarios (? :)` ou simplemsmente utilizado o `operador logico &&`.  
  

***Exemplo:***
Pretendemos criar um sistema que valide se o produto se encontra em distibuição e  adicione a string - "Em entrega" caso o item se encontre em Distribuição

```JSX
// JSX

// Componente Item - recebe parametros : 
// - name: nome do produto - string 
// - onDelivery: Se se encontra em distibuição - booleano
function Item({ name, onDelivery }) {
  return <li className="item">{name}</li>;
}

// Componente principal
// Este componente possui uma lista de componentes Item
export default function MailingValidationSystem() {
  return (
    <section>
      <h1>Estados das entregas</h1>
      <ul>
        <Item 
          onDelivery={true} 
          name="Relogio - AMAZON" 
        />
        <Item 
          onDelivery={true} 
          name="Telemovel - PCDIGA" 
        />
        <Item 
          onDelivery={false} 
          name="Meias - Worten" 
        />
      </ul>
    </section>
  );
}
```

Reparem que na lista de componentes que queremos apresentar alguns componentes estão a passar a propriedade onDelivery a `true` outros a `false`.  
Temos de adicionar o texto " | Em Distibuição " caso o onDelivery seja `true`.  

### **If / Else**
Vejamos como podemos criar esta renderização condicional com recurso a `if / else`:

```JSX
//JSX
function Item({name, onDelivery }) {

    if (onDelivery) {
        return <li className="item">{name} | Em entrega</li>
    }

    return <li className="item">{name}</li>
}
```

### **Operador Ternário**
Vejamos como podemos criar esta renderização condicional com recurso a `Ternários (condicao ? true : false)`:


```JSX
//JSX
function Item({name, onDelivery }) {

    return onDelivery
        ? <li className="item">{name} | Em entrega</li>
        : <li className="item">{name}</li>
    }

// O mesmo que:

function Item({name, onDelivery }) {

    return ( 
        <li className="item">
            {onDelivery ? `${name} | Em entrega` : name} 
        </li>
        )
    }
```
  
Este tipo de escrita é bom para componentes simples e estruturas pequenas, caso vejam que as coisas começam a ficar com demasiados niveis de logica de ternarios extraiam essa logica para ou outros componentes ou variaveis de forma ao codigo ficar mais legivel.

```JSX
//JSX
function Item({name, onDelivery }) {

    const onDeliveryStatus = onDelivery ? `${name} | Em entrega` : name

    return <li className="item">{onDeliveryStatus}</li>
}
```

  ### **Operador Logico "&&"**
  Outra forma comun que podem vir a encontrar em projetos React é a utilização do operador logico `&&`. Normalmente existe sempre que queremos renderizar algo cuja condição seja valida e não necessitamos de renderizar a condição negativa. Com o `operador &&` poderiamos renderizar o "| Em entrega" só se a variavel onDelivery for true.

  ```JSX
function Item({name, onDelivery }) {

    return ( 
        <li className="item">
            {name} {onDelivery &&  | "Em entrega"} 
        </li>
        )
    }
```







