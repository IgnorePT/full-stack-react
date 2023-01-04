# Formulários em React

Em React, um formulário é criado usando um elemento form HTML. Os campos de formulário, como inputs, selects, textareas, etc, são criados usando elementos HTML padrão, mas são geridos e controlados pelo componente React.

### Exemplo:

```JSX
import React from 'react';

const ExemploFormulario = () => (
  <form>
    <label>
      Email:
      <input
        type="email"
        name="email"
      />
    </label>
    <button type="submit">Enviar</button>
  </form>
);

export default ExemploFormulario;
```

Para gerir os dados do formulário, podes usar o estado do componente React. Quando o utilizador preenche ou altera os campos de formulário, o estado é atualizado para refletir o valor atual do campo. Podemos aceder ao valor do campo de formulário no estado e também pode usá-lo para atualizar o valor apresentado no campo de formulário.

### Exemplo:

```JSX
import React, {useState} from 'react';

//Exemplo com gestão de dados
const ExemploFormulario = () => {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    }

    return(
        <form>
            <label>
            Email:
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            </label>
        <button type="submit">Enviar</button>
  </form>
    );

}

export default ExemploFormulario;
```

### Mas porque precisamos de utilizar estados para os valores dos campos do formulario?

Em React, o estado é usado para armazenar os dados que o componente precisa para renderizar e se comportar de maneira correta. Quando os dados do estado são alterados, o componente é atualizado automaticamente para refletir essas alterações.

No caso de um formulário, é comum armazenar o valor atual de cada campo de formulário no estado do componente. Isso permite que o componente tenha acesso aos valores atuais dos campos de formulário e os apresente para o utilizador. Além disso, ao armazenar os valores dos campos de formulário no estado, o componente pode atualizar o valor apresentado no campo de formulário quando o utilizador entra com dados.

Ao armazenar os valores dos campos de formulário no estado, também fica mais fácil enviar os dados do formulário para o servidor ou outro lugar para processamento. Em vez de precisar recuperar o valor de cada campo de formulário do DOM, você pode simplesmente acessar os valores do estado.

## Submissão de Formulários em React

Para submeter um formulário em React, podemos usar o evento `submit` do formulário. Quando o formulário é enviado, o evento `submit` é disparado e podemos manipulá-lo para enviar os dados do formulário para o servidor ou outro lugar para processamento.

Aqui está um exemplo de um formulário de contato criado como um componente de React que usa o evento `submit`:

```JSX
import React, {useState} from 'react';

//Exemplo com gestão de dados
const ExemploFormulario = () => {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // enviar os dados do formulário para o servidor
        // no nosso caso podemos ir buscar o email ao estado
        const body = {email: email};
        //Fetch ou Axios metodo POST || PUT
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
            Email:
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            </label>
        <button type="submit">Enviar</button>
  </form>
    );

}

export default ExemploFormulario;
```

## Validação de Formulários em React

Existem várias maneiras de validar os valores de um formulário em React. É de extrema importancia que seja validados sempre todas as formas de introdução de dados por parte dos nossos utilizadores, algumas dessas razões são as seguintes:

1. Garantir que os dados inseridos pelo utilizador são válidos e de acordo com as regras especificadas - Isso pode evitar erros no processamento dos dados e garantir que a nossa aplicação funcione de maneira correta.

2. Melhorar a experiência do utilizador - Se os utilizadores inserirem dados inválidos podem ficar confusos ou frustrados se o formulário não for validado de maneira adequada. Ao mostrar mensagens de erro claras e específicas, podemos ajudar os utilizadores a entender o que estão a fazer de errado e como corrigir o problema.

3. Evitar problemas de segurança. Validar os dados inseridos pelo utilizador pode ajudar a proteger q nossa aplicação contra ataques como injection de SQL e ataques XSS.

Vejamos então como validar os nossos formulários, aqui estão algumas opções comuns:

1. Utilizar expressões regulares para verificar o formato dos valores introduzidos. Por exemplo, podemos usar uma expressão regular para verificar se o email é válido.

2. Utilizar bibliotecas de validação de formulários, como o "validator" ou o "yup". Estas bibliotecas fornecem funções prontas para validar os tipos mais comuns de dados, como emails, passwords e números.

3. Criar validações personalizadas. Isso pode ser útil quando precisamos de regras de validação mais complexas ou específicas para o nosso aplicativo.

Aqui está um exemplo de como você poderia validar os valores de do nosso formulario:

```JSX
import React, {useState} from 'react';

//Função auxiliar para validar formularios
// Retorna true || False
const isValidEmail = (email) => {
    // Regex de Validação de Email
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return email.matches(validRegex);
}

//Exemplo com gestão de dados
const ExemploFormulario = () => {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({})


    const handleChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Variavel que irá armazenar os erros do nosso formulario.
        const errors = {};
        //Efetuar validações manuais:

        if(!isValidEmail(email)){
            errors.email = 'Email inválido';
        }

        // Validar se não existam erros:
        if (Object.keys(errors).length === 0) {
            // - Enviar os dados do formulário para o servidor
            // - Fetch ou Axios metodo POST || PUT
        } else {
            setErrors({errors})
        }
       
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
            Email:
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            </label>
        <button type="submit">Enviar</button>
  </form>
    );

}

export default ExemploFormulario;
```

### Validações com recurso a Bibliotecas externas
No exemplo anterior vimos como podiamos efectuar validações criadas por nos no momento de submissão do formulário contudo normalmente para validações comuns não é necessario criarmos a lógica toda do nosso lado. isto porque existe um numero gigante de bibliotecas de validação que conseguem fazer isso por nos.  
Vou mostrar um exemplo de validação utilizando o `react-hook-form`.

### Exemplo

```JSX
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

//Função auxiliar para validar formularios
// Retorna true || False
const isValidEmail = (email) => {
    // Regex de Validação de Email
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return email.matches(validRegex);
}

//Exemplo com gestão de dados
const ExemploFormulario = () => {
     const { register, handleSubmit, errors } = useForm();

     const onSubmit = (data) => {
        // enviar os dados do formulário para o servidor
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Email:
                <input
                type="email"
                name="email"
                ref={register({
                    required: 'O email é obrigatório',
                    validate: (value) => isValidEmail(value) || 'Email inválido'
                })}
                />
                {errors.email && <span className="error">{errors.email.message}</span>}
            </label>
        <button type="submit">Enviar</button>
  </form>
    );

}