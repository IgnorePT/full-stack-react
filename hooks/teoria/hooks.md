# React Hooks

**Mas afinal o que são os Hooks em React?**

Apartir da versão 16.8 do React foi introduzido a possibilidade de utilizarmos Hooks nos nossos componentes funcionais.

Os Hooks não são nada mais e nada menos do que funções de Javascript onde podemos isolar a parte reutilizavel de um componente funcional. 


## Fundamentos dos Hooks

Mas antes de pensarnos antes de pensarmos em Hooks vamos pensar em que são funções Javascript e como funcionam.

Em Javascript as funções são partes de codigo reutilizaveis que utilizamos para tarefas que se repetem.
Isto significa que as podemos combinar e até mesmo utilizar umas dentro das outras.


![alt text](https://www.freecodecamp.org/news/content/images/size/w600/2022/03/image-13.png)

Em código seria algo deste genero 

```JS 
function funcao_um() {
    // código
}

function funcao_tres() {
    // código
}

function funcao_dois() {
    // codigo
    
    funcao_tres();
}

function funcao_combinada() {
    // código
    
	funcao_um();
    funcao_dois();
    
    // código
}
```

Como já vimos anteriormente componentes funcionais em React não sao mais nada do que funções simples de Javscript. Por isso se as funções em Javacript são combinaveis, os componentes em React tambem são combinaveis.  
Isto significa que podemos criar componentes dentro de outros componentes, para criar componentes mais complexos.

![alt text](https://www.freecodecamp.org/news/content/images/size/w600/2022/03/image-14.png)

## Stateful VS Stateless
Os componentes em React podem ser de 2 tipos podem possuir estado (Stateful components) ou podem não possuir (Stateless components).

- ``Stateful components:``  
Um componente com estado declara e gere o seu estado dentro de si.
- ``Stateless components:``  
Componentes sem estado são funções puras (pure functions) que não possuem nenhum estado interno sem tem nenhum efeito secundario.  
  

**Mas o que são `funções puras`?**  
São funções que retornam sempre o mesmo output para o mesmo input ou seja não possuem nenhum tipo de efeito secundario.
  
  Se retirarmos a logica do estado e os efeitos de um componente teremos como resultado um componente puro (ou stateless component). Desta forma de removermos esta logica poderemos reaproveitar-la noutras partes das nossa aplicação. Por isso faz sentido isolar o maximo de logica e gerar componentes puros.  


  ![alt text](https://www.freecodecamp.org/news/content/images/size/w600/2022/03/image-15.png)

  ### Relação dos React Hooks & Lógica com estado
  Utilizamos React Hooks para isolar logica de estado e os seus side-effects de um componente funcional. Hooks são simplesmente funções em javascript que gerem o comportamento do estados e os seus side-effects isolando-os do componente.

  Entao atraves deste recurso podemos isolar toda a logica de estado e utilizar dentro dos componentes.

  ![alt text](https://www.freecodecamp.org/news/content/images/size/w600/2022/03/image-16.png)
  
  **Mas o que é `Logica de estado (stateful logic)`?**
  Não é nada mais do que qualquer estado local variavel de um componente.
  Um exemplo comum é a lógica para requisitar dados de uma API e gerir esses dados numa variavel local é `"Logica de estado"`. A forma como efetuamos essa requisição e a sua lógica pode ser reaproveitada por multiplos componentes.

  Etão podemos definir Reack Hooks como sendo funções Javascript que nos permitem isolar partes reutilizaveis da nossa aplicação de um componente funcional. Hooks podem ser stateful e gerir Side-effects.

  ![alt text](https://www.freecodecamp.org/news/content/images/size/w600/2022/03/image-17.png)

  # Alguns Hooks providenciados pelo React

  - ``useState``:   
  Hook utilizado para gestão de estados. Retorna um valor de estado e uma função para atualizar o mesmo estado
  - ``useEffect``:  
  Hook para gestão de side-effects como chamadas a API's, subscrições, mutações de dados etc.
  - ``useContext``:  
  Hook que retorna o valor atual de um contexto
  - ``useReducer``:  
  Uma alternativa ao useState que ajuda na criação de gestores de estado mais complexos
  - ``useCallback``:  
 Hook que retorna uma versão memorizada de uma função callback que ajuda a que o componente filho não seja re-renderizado desnecessariamente
 - ``useRef``:  
 Hook perfeito para armazenar valores aos quais podemos alterar sem a re-renderização dos componentes. Retorna um objeto com a propriedade `.current` que é mutavel.
 - `useLayoutEffect`:
 Hook que é disparado no final de todas as mutações DOM. É recomendado usar useEffect tanto quanto possível em vez de este hook, pois useLayoutEffect é acionado de forma síncrona.  
  
  
  
# Basic Hooks

 ## ``UseState``

```JSX 
//Importação do useState
import React, {useState} from React

//Estrutura do useState
const [state, setState] = useState(estadoInicial); (state é o nome daquilo que quero, e depois da virgula é a função, que começa com set e o nome do que quero!)
```

O useState retorna um valor de estado e uma função para atualizar o mesmo.  
   
Durante a renderização inicial, o estado retornado (``state``) é o mesmo que o valor passado como primeiro argumento (``estadoInicial``).

A função ``setState`` é usada para atualizar o estado. Ela aceita um novo valor de estado e desencadeia uma nova renderização do componente.

```JSX 
//Definir novo estado
setState(novoEstado);
```

Durante as novas renderizações, o primeiro valor retornado por useState sempre será o estado mais recente após a aplicação das atualizações.

### Functional updates

Se o novo estado for calculado com recurso ao estado anterior, podemos passar uma função para ``setState``. A função recebe o valor anterior e retornará um valor atualizado. Aqui está um exemplo de um componente contador que usa ambas as formas de setState:
```JSX 
function Counter({contadorInicial}) {
  const [contador, setContador] = useState(contadorInicial);
  return (
    <>
      Contador: {contador}
      {/* Forma normal */}
      <button onClick={() => setCount(contadorInicial)}>Reset</button>

      {/* Forma funcional */}
      <button onClick={() => setCount(contadorAnterior => contadorAnterior - 1)}>-</button>
      <button onClick={() => setCount(contadorAnterior => contadorAnterior + 1)}>+</button>
    </>
  );
}
```

No exemplo apresentado os botões ``"+"`` e ``"-"`` utilizam a forma funcional, pois o valor atualizado é baseado no valor anterior. Mas o botão ``"Reset"`` usa a forma normal, porque sempre retorna a contagem ao valor inicial.

Se a função de update retornar exactamente o mesmo valor que o valor atual, a re-renderização do componente será omitida completamente.

### InitialState deferido 

O argumento ``estadoInicial (initialState)`` é o estado usado durante a renderização inicial. Nas renderizações subsequentes, ele é utilizado. Se o estado inicial for resultado de um processo de computação complexa, podem fornecer uma função, que será executada apenas na renderização inicial:
```JSX 
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});

```

### Ignorando uma atualização de estado
Se você atualizar um State Hook para o mesmo valor do estado atual, o React não vai renderizar os filhos ou disparar efeitos.

O React ainda pode precisar renderizar esse componente específico novamente antes de sair. Isso não deve ser uma preocupação porque o React não irá descer desnecessariamente na árvore. Se estivermos a fazer cálculos com muita computação durante a renderização, podemos otimizá-los com o Hook useMemo.

### Atualização de estados agrupados
O React pode agrupar várias atualizações de estado numa única renderização para melhorar o desempenho. Isto melhora o desempenho e não deve afetar o comportamento da aplicação.

Antes do React 18, apenas as atualizações dentro dos manipuladores de eventos do React eram feitas em grupo. A partir do React 18, ataulizações em grupo são ativado para todas as atualizações por defeito. React garante que as atualizações de vários eventos diferentes iniciados pelo utilizador — exemplo, clicar duas vezes num botão — sejam sempre processadas separadamente e não sejam agrupadas. Desta forma evita erros lógicos.

Existem alguns casos raros onde é necessario forçar a atualização da DOM a ser aplicada de forma síncrona, podemos envolvê-la em flushSync. No entanto, isso pode prejudicar o desempenho.

## ``useEffect``

```JSX 
//Importação 
import React,  { useEffect } from React

//Utilização
useEffect(didUpdate);
```

O ``useEffect`` é um hook que combina 3 life cycles dos class components o ``componentDidMount/componentDidUpdate (effectFn)`` com o ``componentWillUnmount (cleanupFn)``.

Aceita uma função que contém código imperativo, possivelmente eficaz.

Mutações, subscrições, temporizadores, registro e outros efeitos secundarios não são permitidos dentro do c´digo da função principal de um functional component (denominado fase de renderização). Fazer isso pode levar a erros e inconsistências no UI (user interface).

Utilizamos então o ``useEffect``. A função passada para useEffect será executada após a renderização do compoente.

Por padrão, os useEffects são executados após cada renderização, mas você podemos optar por dispará-los somente quando determinados valores forem alterados.

### Limpar um effect
Frequentemente, os efeitos criam recursos que precisam ser limpos antes que o componente seja destruido, como uma subscrição, ou uma temporizador. Para fazer isso, a função passada para useEffect pode retornar uma função de limpeza. Por exemplo, para criar uma subscrição:
```JSX
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // limpando a subscrição
    subscription.unsubscribe();
  };
});
```

A função de limpeza é executada antes que o componente seja destruido da UI para evitar memory leaks. Se um componente for renderizado várias vezes (como normalmente acontece), o efeito anterior será limpo antes de executar o próximo efeito. No nosso exempli, isto significa que uma nova subscrição é criada a cada atualização.

### Timming dos useEffects
Ao contrário de componentDidMount e componentDidUpdate, a função passada para useEffect é executada após a renderização do layout, durante um evento deferido. Isso o torna adequado para muitos side-effects comuns, como configurar subscrições e handlers de eventos, porque a maioria dos tipos de trabalho executados num useEffect não deve impedir browser de renderizar a interface.

Mas nem todos os efeitos podem ser adiados. Por exemplo, uma mutação DOM visível para o usuário deve disparar de forma síncrona antes da próxima renderização para que o utilizador não perceba nenhuma inconsistência visual. Para esses tipos de efeitos, podemos utilizar o useLayoutEffect.

Além disso, a partir do React 18, a função passada para useEffect será disparada de forma síncrona antes do layout e da render da pagina quando for o resultado de uma entrada discreta do utilizador (ex: clique) ou quando for o resultado de uma atualização agrupada em flushSync. Esse comportamento permite que o resultado do useEffect seja observado pelo sistema de eventos ou pelo flushSync.

[FlushSync DOC](https://beta.reactjs.org/apis/react-dom/flushSync)

Mesmo nos casos em que useEffect é deferido até que o navegador tenha renderizado, é garantido que ele será disparado antes de qualquer nova renderização. O React sempre liberará os efeitos de uma renderização anterior antes de iniciar uma nova atualização.

### Outros recursos

