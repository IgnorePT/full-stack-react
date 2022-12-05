import shoeImage from'./assets/nike19.png'

import ListaArray01 from "./ListaArray01/ListaArray01"
import ListaArray02 from "./ListaArray02/ListaArray02"

function App() {

  const favList = ["musica 1", "musica 2"];

  const favListObject = [
    {
      idMusica: 0,
      img : shoeImage,
      nome: "outras linguas",
      artista: "Tinoco"
    },
    {
      idMusica: 1,
      img : shoeImage,
      nome: "Olá solidão",
      artista: "Quatro e meia"
    }
  ];

  return (
    <div className="App">
        <ListaArray01 favList = {favList}/>
        <ListaArray02 favListObject = {favListObject}/>
    </div>
  )
}

export default App
