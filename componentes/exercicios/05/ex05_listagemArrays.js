//-----------O projeto não está inicializado, não tem node modules, etc... ver enunciado de novo e inicializar (dicas em baixo);

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

import './App.css';

const SpotifyList = (props) => {
	console.log(props.title);
	//ou
	const { title, musicList } = props;
	console.log(title);
	return (
		<div className="spotify-fav">
			<h3>{title}</h3>
			<ul className="music-list">
				{musicList.map((music, index) => {
					const id = uuidv4();
					return (
						<li key={id} className="music">
							{music}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
//Para as keys unicas nas li, instalar package uuid, código já escrito  OU crypto.randomUUID()
function App() {
	const favList = ['musica 1', 'musica 2', 'musica 3', 'musica 4'];

	return <SpotifyList title="Coisa" musicList={favList}></SpotifyList>;
}

export default App;

/**
 * Dicas:
 *  - Podes criar uma aplicação num projeto novo com recursos Vite ou CRA
 *  - Podes criar a const favListObject no ficheiro App.jsx (vite) | App.js (cra)
 *  - Para passares o variavel cria uma chave e passa o faviListObject
 *    Passar para filho: <Componente favList={*variavel*} />
 *    Usar no componente: const Componente = (props) => {...}
 */
