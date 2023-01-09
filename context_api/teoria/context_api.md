# Context API React
O Context API é uma funcionalidade do React que permite passar dados através da árvore de componentes de uma aplicação sem precisar passar props manualmente em cada nível (tambem conhecido como `props drilling`). Isso pode ser útil quando temos uma árvore grande de componentes e precisamos de passar um dado para componentes que se encontram muitos níveis abaixo na árvore. Ao invés de passar o dado por props em cada componente intermediário, podemos usar o Context API para tornar o dado disponível para os componentes que precisem dele sem precisar passá-lo explicitamente.

![Problema que o Context API resolve](https://foxcoding.net/edit/context_api.webp)

## Diferenças entre Redux e Context API

![Context API vs Redux](https://foxcoding.net/edit/redux_vs_context.jpg)

O Context API e o Redux são dois mecanismos diferentes para gestão do estado em uma aplicação React. Ambos permitem que seja compartilhado dados entre vários componentes da aplicação, mas eles conseguem isto de maneiras diferentes.

Como já vimos o Context API é uma funcionalidade nativa do React que permite passar dados através da árvore de componentes de uma aplicação sem a necessidade de passar props manualmente a cada nível. Isto é útil quando temos uma grande árvore de componentes e precisamos de passar um dado para componentes que ficam alguns níveis abaixo na árvore. Para usarmos o Context API, criamos um contexto com ``React.createContext()`` e usamos os componentes ``Provider`` e ``Consumer`` para passar e aceder aos dados.

O Redux, por outro lado, é um gestor de estados global para aplicações. Permite que sejam partilhados dados entre todos os componentes da aplicação e fornece uma forma de gerir o estado da aplicação de maneira consistente e previsível. Em Redux, o estado da aplicação é armazenado em um único objeto chamado de ``store`` e os componentes da aplicação acedem ao estado através de ``selectors``. Quando o estado necessita de ser modificado, os componentes disparam ``actions`` que são processadas por ``reducers``, que atualizam o estado da aplicação de maneira consistente.

Em resumo, o Context API é uma funcionalidade nativa do React que permite passar dados através da árvore de componentes de uma aplicação, enquanto o Redux é um gestor do estado global para aplicações que permite partilhar dados entre todos os componentes da aplicação e fornece uma forma consistente e previsível de gerir o estado da aplicação.

### Fluxo Redux


### Fluxo Context API


## Como usar Context API

Para usar o Context API, precisamos de criar um contexto com ``React.createContext()``. Este metodo vai retornar um objeto com dois componentes: ``Provider`` e ``Consumer``. Devemos englobar os componentes que precisam dos dados com o componente ``Consumer`` e envolver os componentes que fornecem o dado com o componente ``Provider``. O componente ``Provider`` recebe um prop com a chave ``value`` que é o dado que queremos tornar disponíveis para os componentes filhos que estão englobados pelo componente Consumer.

### Exemplo de um carrinho com recurso ao Context API

```TSX
import {createContext, useContext, useState } from 'react';

// Valor inicial do nosso Contexto
const initialValue =  null;

// 1º - Criamos o Contexto 
// Create Context recebe como parametro o valor inicial ou por defeito no inicio da nossa aplicação
const CartContext = createContext(initialValue);

//2º - Criação do Provider
const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = item => {
    setItems(prevItems => [...prevItems, item]);
  };

  const removeItem = itemId => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//Utilização do Contexto dentro dos nossos componentes
const ProductList = () => {
  const context = useContext(CartContext);

  return (
    <>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <button onClick={() => context.addItem(product)}>Add to cart</button>
        </div>
      ))}
    </>
  );
};

const Cart = () => {
  const context = useContext(CartContext);

  return (
    <React.Fragment>
      {context.items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => context.removeItem(item.id)}>Remove from cart</button>
        </div>
      ))}
    </React.Fragment>
  );
};

// Utilização do Provider
const App = () => (
  <CartProvider>
    <ProductList />
    <Cart />
  </CartProvider>
);
```

Importante perceber que podemos ter um ou mais contextos dentro na nossa aplicação.