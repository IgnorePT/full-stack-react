import React, { useState } from 'react';
import './State.css'

const Components = () => {
    const [counter, setCounter] = useState(0);
    const reset = 0;
    return (
        <div className='container'>

        <button onClick={() => setCounter((counter)=> counter + 1)}>Next</button>

        {counter}

        <button onClick={() => setCounter((counter) => counter -1 )}> Back </button>

        <button className='btn-reset' onClick={() => setCounter((reset))} >Reset</button>

        </div>

    )

}

export default Components


/**
 * 
 * Cria uma counter APP cujo componente modifique um estado
 * e aplique o seu estado ao Titulo do projeto
 * 
 * Dicas: 
 * - Armazenem o counter num estado useState
 * - Não se esqueçam de importar
 * - Modifiquem no onClick
 * - Podem usar https://codesandbox.io/
 */