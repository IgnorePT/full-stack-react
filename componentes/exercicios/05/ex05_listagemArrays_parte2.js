//----------ACABAR ESTE EXERCÍCIO!  https://codesandbox.io/p/sandbox/friendly-curran-ckuunp?file=%2Fsrc%2FApp.tsx&selection=%5B%7B%22endColumn%22%3A18%2C%22endLineNumber%22%3A36%2C%22startColumn%22%3A18%2C%22startLineNumber%22%3A36%7D%5D&workspace=%257B%2522activeFileId%2522%253A%2522cl9zkf3e9000alqiphi669wk8%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%252C%2522%252Fsrc%252FApp.tsx%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clbb63o9g000u376i1mczazws%2522%253A%257B%2522key%2522%253A%2522clbb63o9g000u376i1mczazws%2522%252C%2522name%2522%253A%2522Default%2520Space%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clbb6jvxl032m376i38589mrb%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clbb63o9g000u376i1mczazws%2522%257D

/* Ex 02:
 * Cria a mesma aplicação com recursoa um array de objetos
 * Cria uma lista de cards com Titulo, Artista, Imagem
 */

//Ex 02

import './App.css';

/* Estrutura do Array
const favListObject = [
	{
		idMusica: 0,
		nome: '',
		artista: '',
	},
];
*/

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

const SpotifyList = ({ title, musicList }) => {
	//Logica

	return (
		<div className="spotify-fav">
			<h3>{title}</h3>
			<ul className="music-list">
				{musicList.map(({ title }) => {
					const id = crypto.randomUUID();

					return (
						<div
							key={id}
							onClick={() => console.log('musica favoria')}
							className="music-card"
						>
							<img src="" />
							<h3 className="title">{title}</h3>
							<h5 className="artist">*nome do artista</h5>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

function App() {
	//const favList = ["musica 1", "musica 2", "musica 3", "musica 4"];

	const favList = [
		{
			id: 0,
			title: 'musica 1',
			imagem: 'lalalal',
			artista: 'Ariana Grande',
		},
		{
			id: 1,
			title: 'musica',
			imagem: 'lalalal',
			artista: 'Ariana Grande',
		},
		{
			id: 2,
			title: 'musica',
			imagem: 'lalalal',
			artista: 'Ariana Grande',
		},
		{
			id: 3,
			title: 'musica',
			imagem: 'lalalal',
			artista: 'Ariana Grande',
		},
		{
			id: 3,
			title: 'musica',
			imagem: 'lalalal',
			artista: 'Ariana Grande',
		},
	];

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
