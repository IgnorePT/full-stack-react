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
            {name} {onDelivery &&  "| Em entrega"} 
        </li>
        )
    }
```

## Renderizar Arrays

Muitas vezes vai ser necessario renderizar um componente atraves de uma coleção de dados (Arrays [], Array's de Objetos[{}]) e não de dados simples (objetos). Em Javascrit utilizamos arrays para armazenar conjuntos de dados e temos os metodos dos Array's disponiveis para manipular e apresentar esses dados.  
  
[Array's MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Em React utilizaremos principalmente os metodos filter() e map() para manipular esses mesmos dados e renderizar só os elementos filtrados que precisamos ou mapear a nossa informação para os componentes de React.

*Como funciona:*  
Vamos imaginar que queremos fazer criar uma lista de perfis de programadores.
A nossa lista vai apresentar o nome e a linguagem em que programa. Queremos fazer isto numa listagem

```HTML
<!-- HTML final que queremos renderizar -->
<ul>
  <li>Jõao: JAVA</li>
  <li>Mario José: C#</li>
  <li>C. Ronaldo: Linic</li>
  <li>Maia: Javascript</li>
  <li>Chico: Cobol</li>
</ul>
```
Como podemos ver acima descrito existe um elemento que se repete e que só altera o seu conteudo as `<li></li>`.  
Este é um exemplo de algo que acontece inumeras vezes ao longo da nossa vida como desenvolvedor. Muitas vezes iremos ter estruturas iguas para apresentar algo onde só se altera o conteudo ex: Listagens de texto, Galeria de imagens, Comentarios em posts, Cards de produtos, etc.  

Esta informação pode ser armazena da em objetos ou arrays para mais tarde ser utilizada com recurso as funções de `filter` e `map`.

Mas primeiro vamos passar a informação descrita no HTML para um array:

```JSX
// Array de candidatos
const candidatos = [
  "Jõao: JAVA",
  "Mario José: C#",
  "C. Ronaldo: Linic",
  "Maia: Javascript",
  "Chico: Cobol"
]

// Vamos mapear os candidatos para um novo array de nodes JSX
const listaCandidatos = candidatos.map(candidato => {
  return <li>{candidato}</li>
})

// A nossa constante listaCandidatos neste momento tem armazenados um conjunto de elementos JSX do tipo li.

// Para renderizar o nossa lista dentro do Componente principal so temos de carregar esta constante para o elemento

// Todo junto fica assim:
const ListaCandidatos = () => {

  const candidatos = [
    "Jõao: JAVA",
    "Mario José: C#",
    "C. Ronaldo: Linic",
    "Maia: Javascript",
    "Chico: Cobol"
  ]

  const listaCandidatos = candidatos.map(candidato => {
    return <li>{candidato}</li>
  })

  return <ul>{listaCandidatos}</ul>
}
```

[Exemplo em Codesandbox](https://codesandbox.io/s/react-playground-forked-33sxtv?file=/index.js)

Se tentarem correr este codigo e analisarem a consola vão reparar que existe o seguinte erro:

```console 
Warning: Each child in a list should have a unique “key” prop.
```

Este erro é normal com o código que desevolvemos e vamos resolver nos passos seguintes, mas primeiro vamos restruturar o nosso array de candidatos de forma a separar a informação do nome e da linguagem.

```JSX 
 //Array [] de Objetos {}
  const candidatos = [
    {
      id: 0,
      nome: "Jõao", 
      linguagem: "JAVA"
    }, {
      id: 1,
      nome: "Mario José", 
      linguagem: "C#"
    }, {
      id: 2,
      nome: "C. Ronaldo", 
      linguagem: "Linic"
    }, {
      id: 3,
      nome: "Maia", 
      linguagem: "Javascript"
    }, {
      id: 4,
      nome: "Chico", 
      linguagem: "Cobol"
    }
  ]
```
Basicamente o que fizemos nesta nova estrutura é criarmos um conjunto de dados estruturados onde para cada elemento do array temos um conjunto de dados associados ou seja para o candidato na posição 0, podemos saber os dados como o nome a linguagem e o seu ID (identificador unico).

Desta forma podemos mapear os nossos candidatos e utilizar o mesmo exemplo da seguinte forma:

```JSX
const ListaCandidatos = () => {

  const candidatos = [
    { id: 0, nome: "Jõao", linguagem: "JAVA"},
    { id: 1, nome: "Mario José", linguagem: "C#"},
    { id: 2,  nome: "C. Ronaldo", linguagem: "Linic"},
    { id: 3, nome: "Maia", linguagem: "Javascript" },
    { id: 4, nome: "Chico", linguagem: "Cobol"}
  ]

  const listaCandidatos = candidatos.map(candidato => {
    return <li>{candidato.nome} {candidato.linguagem}</li>
  })

  return <ul>{listaCandidatos}</ul>
}
```

### Key Props

No exeplo anterior se analisarmos a consola podemos ver o existe um erro que diz o seguinte:

```console 
Warning: Each child in a list should have a unique “key” prop.
```

Mas porque surge este erro? E o que significa?

Basicamente em React todos os elementos de uma listagem gerados devem possuir uma chave unica (key).  

Mas porque?  

Como falado anteriormente sabemos que em React não estamos a trabalhar sobre a DOM (Document Object Model) existente nos browsers mas sim numa DOM Virtual a que denominamos de VDOM (Virtual DOM) que não é mais do que uma representação JS da DOM que queremos representar e so atualizamos elementos no DOM se algum elemento for modificado. Ora numa listagem de elementos JSX o que acontece é que os elementos que são renderizados é o mesmo varias vezes desta forma no momento de atualizar a informação caso seja necessaria nunca conseguiriamos saber qual elemento que queremos atualizar porque são todos o mesmo "elemento".  
Desta forma foi necessario criar algum sistema que nos permita identificar estes elementos e foi assim que surge a necessidade de ser criada uma propriedade `key`.

O que é a prop `key`?

A propriedade key basicamente é uma propriedade onde temos de passar um valor unico e não partilhado que irá identificar esse elemento JSX. Desta forma conseguimos identificar o elemento correspondente e atualizar este componente sem termos a necessidade de renderizar o resto dos elementos da listagem.

Ou seja o valor key deve ser um valor sempre unico e que identifique o elemento sem poder ser confundido com outro. 

No exemplo acima descrito temos nos dados um valor unico é uma chave unica e que pode ser utilizado como key no nosso elemento, falamos do valor do `id` que é o identificador unico para cada pessoa. 

```JSX 
const listaCandidatos = candidatos.map(candidato => {
  return (
    <li key={candidato.id}> 
      {candidato.nome} {candidato.linguagem}
    </li> 
  )
  })
```

Todo junto:
```JSX
const ListaCandidatos = () => {

  const candidatos = [
    { id: 0, nome: "Jõao", linguagem: "JAVA"},
    { id: 1, nome: "Mario José", linguagem: "C#"},
    { id: 2,  nome: "C. Ronaldo", linguagem: "Linic"},
    { id: 3, nome: "Maia", linguagem: "Javascript" },
    { id: 4, nome: "Chico", linguagem: "Cobol"}
  ]

  const listaCandidatos = candidatos.map(candidato => {
    return (
      <li key={candidato.id}>
        {candidato.nome} {candidato.linguagem}
      </li>)
  })

  return <ul>{listaCandidatos}</ul>
}
```






