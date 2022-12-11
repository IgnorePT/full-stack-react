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

 //Link sandbox: https://codesandbox.io/p/sandbox/gifted-https-lkt4rj?file=%2Fsrc%2FApp.tsx

function App() {
  const [state, setSate] = useState(0);

  return (
    <>
      <h1>Adiciona de 0-10</h1>
      <h2>{state}</h2>
      <button
        onClick={() =>
          setSate((contadorInicial) => {
            if (contadorInicial >= 0 && contadorInicial < 10) {
              return contadorInicial + 1;
            }

            alert("Não pode haver números maiores que 10");

            return 0;
          })
        }
      >
        Add
      </button>
      <button
        onClick={() =>
          setSate((contadorInicial) => {
            if (contadorInicial > 0 && contadorInicial < 10) {
              return contadorInicial - 1;
            }
            alert("Não pode haver números negativos");
            return 0;
          })
        }
      >
        Remove
      </button>
    </>
  );
}
