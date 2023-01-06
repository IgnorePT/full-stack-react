# Typescript em React
TypeScript é uma linguagem de programação que é baseada em JavaScript (é um superset) e adiciona tipos estáticos e outras funcionalidades ao JavaScript.   
Isso pode tornar o código mais seguro e confiável, pois os erros de tipagem são detectados no processo de compilação, em vez de aparecerem em runtime. Além disso, o TypeScript também oferece recursos como interfaces, classes e módulos que podem ajudar a organizar e estruturar o código de forma mais clara. É comunmente usado em projetos de front-end, mas também pode ser usado em projetos back-end.

## Porque usar typescript em React
Existem algumas razões pelas quais os programadores podem optar por usar o TypeScript em projetos React:

1. **Tipagem**: o TypeScript pode ajudar a garantir que o código está corretamente tipado, o que pode reduzir os erros e tornar o código mais exacto e fiavel.

2. **Melhor compreensão do código**: os tipos estáticos fornecem mais informações sobre o código, o que pode torná-lo mais legível e fácil de entender para outros desenvolvedores.

3. **IntelliSense**: o TypeScript fornece IntelliSense, que é uma funcionalidade de autocomplete e exibição de dicas de ferramentas de desenvolvimento integrado (IDE). Isso pode ajudar a economizar tempo e tornar o processo de desenvolvimento mais eficiente.

4. **Interoperabilidade com bibliotecas**: muitas bibliotecas populares, como o `React Router`, já são fornecidas com tipos do TypeScript, o que pode tornar mais fácil usá-las em projetos TypeScript.

Em geral, o TypeScript pode ser uma adição valiosa a qualquer projeto React, especialmente em projetos maiores ou em equipas maiores, onde a segurança de tipagem e a legibilidade do código podem se tornar muito importantes.

## Como utilizar Typescript em aplicações React
### Processo Manual
Para começar a usar o TypeScript em um projeto React, precisamos de fazer o seguinte:

1. Instalar o TypeScript: podemos instalar o TypeScript globalmente em sua máquina com o seguinte comando:  
```SH 
npm install -g typescript
```

2. **Configurar o projeto**: crie um ficheiro chamado `tsconfig.json` na raiz do seu projeto com as configurações do TypeScript. Podemos usar o comando ```tsc --init``` para criar um ficheiro de configuração com as configurações por defeito.

3. **Converter ficheiros JavaScript existentes**: para converter ficheiros JavaScript existentes para TypeScript, basta renomeá-los com a extensão .ts ou .tsx. Também podem usar o comando `tsc --jsx react` para habilitar o suporte a JSX no TypeScript.

4. **Adicionar tipos**: agora podem começar a adicionar tipos ao  código. Podemos fazer isto adicionando anotações de tipo a variáveis ​​e parâmetros de função, por exemplo: 
```TSX 
const foo: string = 'bar' 
```

5. **Compilar o código**: finalmente, podemos usar o comando `tsc` para compilar o código TypeScript em JavaScript que pode ser executado pelo navegador.

Lembrar de que também precisamos de instalar alguns pacotes de dependência, como o `@types/react`, para obter tipos para o React.

### Processo Automatico
**CRA** & **Vite**   
Para usar o TypeScript em um projeto criado com o Create React App (CRA), podes seguir os seguintes passos:

1. **Instalar o TypeScript**: você pode instalar o TypeScript globalmente em sua máquina com o seguinte comando:
```SH
npm install -g typescript
```

2. **Iniciar um projeto CRA ou VITE**: crie um novo projeto CRA usando o comando 
```SH
#CRA
npx create-react-app my-project --template typescript

#Vite
vite create my-project --template react-ts
```
Isso criará um novo projeto chamado "my-project" com o TypeScript pré-configurado.

3. **Converter ficheiros JavaScript existentes**: se já tiveres um projeto CRA ou VITE existente e queres adicionar o TypeScript, podes converter os ficheiros JavaScript existentes para TypeScript renomeando-os com a extensão .ts ou .tsx.  Ou usar o comando ``tsc --jsx`` react para habilitar o suporte a JSX no TypeScript.

4. **Adicionar tipagem**: agora podem começar a adicionar tipos ao seu código. Isso pode ser feito adicionando anotações de tipo a variáveis ​​e parâmetros de função, por exemplo: 
```tsx
const foo: string = 'bar'
```

5. **Executar o projeto**: finalmente, podem executar o projeto com recurso ao comando

```SH
#CRA
npm start || yarn start

#Vite
npm run dev || yarn dev
```

## Tipagem em Typescript

### Tipagem de variáveis
Para tipar uma variável em TypeScript, devemos especificar o tipo da variável quando adeclarámos. Aqui está um exemplo de como podemos fazer isso:

```TS
// Estrutura
// Iniciar variável : tipo = valor
let message: string = 'Hello, world!';
const PI: number = 3.14;

message = 'Hello, TypeScript!';
PI = 3.15; // Erro: não é possível atribuir um novo valor a uma constante

```

Neste exemplo, temos duas variáveis: ``message`` e ``PI``. A variável message é do tipo ``string`` e a variável PI é do tipo ``number``. Isto significa que message só pode armazenar valores do tipo string e PI só pode armazenar valores do tipo number.

Testem esta funcionalidade e habituem-se a ver as e interpretar as messagens de erros que surjam.


## Outros beneficios para alem da tipagem
Além da segurança de tipagem, o TypeScript também oferece outras funcionalidades que podem ser úteis em projetos React. Alguns exemplos incluem:

* Interfaces: as interfaces no TypeScript permitem que você defina um conjunto de propriedades que um objeto deve ter. Isso pode ser útil para garantir que os componentes do React estão a receber os dados corretos e no formato correto.

* Classes: o TypeScript suporta o uso de classes, o que pode tornar mais fácil organizar o código em componentes do React. As classes permitem a criação de componentes mais complexos, como componentes de classe que têm estado interno ou métodos de ciclo de vida. (ES6 meio que matou isto)

* Modules: o TypeScript suporta o uso de módulos, o que pode ajudar a organizar o código em módulos separados e evitar conflitos. Isso pode ser útil em projetos React maiores, onde é importante manter o código organizado e de gestão facil.

* Decorators: o TypeScript suporta o uso de decorators, que são funções que podem ser usadas para modificar o comportamento de classes, métodos e propriedades. Isso pode ser útil para adicionar funcionalidades como o gestão de estado ou o gestão de erros a componentes do React.

No geral, o TypeScript pode fornecer uma série de recursos adicionais que podem ajudar a organizar e estruturar o código de forma mais clara em projetos React.

### Exemplo de Modulos
```TS
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// main.ts
import { add, subtract } from './math';

console.log(add(1, 2)); // 3
console.log(subtract(1, 2)); // -1
```

### Decorators

```TS
// logger.ts
export function logger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(`Arguments: ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Result: ${result}`);
    return result;
  };

  return descriptor;
}

// myModule.ts
function add(a: number, b: number): number {
  return a + b;
}

const decoratedAdd = logger(add);
decoratedAdd(1, 2); // Output: Arguments: [1, 2] Result: 3

```

### Interfaces
As interfaces no TypeScript são usadas para definir um contrato que um objeto ou função deve seguir. Elas permitem que você especifique o formato de um objeto ou a assinatura de uma função, incluindo os tipos de parâmetros e o tipo de retorno.

No contexto de um projeto React, as interfaces podem ser úteis para garantir que os componentes estão a receber os dados corretos e no formato correto. Por exemplo, podemos criar uma interface para os dados que um componente precisa e, em seguida, usá-la como o tipo de propriedades do componente. Isso garantirá que o componente recebe apenas os dados que ele espera e no formato correto, o que pode ajudar a evitar erros em runtime.

As interfaces também podem ser úteis para tornar o código mais legível e fácil de entender. Por exemplo, ao criar uma interface para os dados de um componente, você pode fornecer uma documentação clara sobre o formato dos dados que o componente espera, o que pode ajudar outros desenvolvedores a entender como o componente deve ser usado.

No geral, as interfaces são uma ferramenta poderosa para garantir a segurança de tipo e a legibilidade do código em projetos React.

### Exemplo de Interfaces
```TSX
interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  user: User;
  onDelete: (id: number) => void;
}

const UserListItem: React.FC<Props> = ({ user, onDelete }) => {
  return (
    <li>
      {user.name} ({user.email})
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
};
```