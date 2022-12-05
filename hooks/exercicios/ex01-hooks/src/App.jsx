import {useState} from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <h1>Counter: {contador}</h1>
      <button
        onClick={() => {
          setContador((contador) => contador + 1);
        }}
      >
        Adicionar
      </button>
    </>
  );
}

export default App
