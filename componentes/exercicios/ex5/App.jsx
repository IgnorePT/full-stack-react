import "./App.css";





/**
 * Spotify Fav
 * 
 * Ex 01:
 * Cria uma aplicação que receba um array das tuas musicas favoritas
 * e as as aplique numa lista segue a lista em exemplo
 * 
 * Ex 02:
 * Cria a mesma aplicação com recursoa um array de objetos 
 * Cria uma lista de cards com Titulo, Artista, Imagem
 */


 // HTML esperado
 /**
  * <div class="spotify-fav">
  *  <ul class="music-list">
  *     <li class="music">*nome-musica*</li>
  *     <li class="music">*nome-musica*</li>
  *     ...
  *  </ul>
  * </div>
  */
 
const SpotifyList = (props) => {

    const { title, musicList } = props
    
    return (
        <div className="spotify-fav">
            <ul className="music-list">
                <li className="music">*nome-musica*</li>
                <li className="music">*nome-musica*</li>
            </ul>
        </div>
    )
}

function App() {
    const favList = ["musica 1", "musica 2", "musica 3", "musica 4"];

    return <SpotifyList title="titulo" musicList={favList}></SpotifyList>
}

 //Ex 02
 // Estrutura do Array
 const favListObject = [{
     idMusica: 0,
     nome: "",
     artista: ""
 }];
 
 // HTML esperado
 /**
  * <div class="spotify-card-list">
  *  <div class="music-card">
  *      <img src="" />
  *      <h3 class="title">*nome musica*</div>
  *      <h5 class="artist">*nome do artista</div>
  *  </div>
  * *  <div class="music-card">
  *      <img src="" />
  *      <h3 class="title">*nome musica*</div>
  *      <h5 class="artist">*nome do artista</div>
  *  </div>
  *  ...
  * </div>
  */
 
 /**
  * Dicas:
  *  - Podes criar uma aplicação num projeto novo com recursos Vite ou CRA
  *  - Podes criar a const favListObject no ficheiro App.jsx (vite) | App.js (cra)
  *  - Para passares o variavel cria uma chave e passa o faviListObject 
  *    Passar para filho: <Componente favList={*variavel*} />
  *    Usar no componente: const Componente = (props) => {...} 
  */
 