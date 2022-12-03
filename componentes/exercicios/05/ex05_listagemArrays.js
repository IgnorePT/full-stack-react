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

const favList = ["musica 1", "musica 2"];

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

