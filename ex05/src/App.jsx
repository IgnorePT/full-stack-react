import './App.css'

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
 
const SpotifyList = ({ title, musicList }) => {

  return (
      <div className="spotify-fav">
          <h3>{title}</h3>
          <ul className="music-list">
              {musicList.map((music) => (
                  <li className="music">{music}</li>
              ))}
          </ul>
      </div>
  )
}

function App() {
  const favList = ["musica 1", "musica 2", "musica 3", "musica 4"];

  return <SpotifyList title="Coisa" musicList={favList}></SpotifyList>
}

export default App;