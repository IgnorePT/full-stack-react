import './App.css'
import { v4 as uuidv4 } from "uuid";

const favList = ["Cómo Me Quieres", "Nikes", "Photosynthesis"];
const favList2 = [
  { title: "Cómo Me Quieres", artist: "Khruangbin" },
  { title: "Nikes", artist: "Frank Ocean" },
  { title: "Diablo", artist: "Rosalia" }
];

const SpotifyList = ({ title, musicList }) => {
  return (
    <div className="spotify-fav">
      <h3>{title}</h3>
      <ul className="music-list">
        {musicList.map((music) => {
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

const SpotifyList2 = ({ musicList, title }) => {
  return (
    <div className="spotify-fav">
      <h3>{title}</h3>
      <ul className="music-list">
        {musicList.map((music) => {
          const id = uuidv4();
          return (
            <li key={id} className="music">
              {music.title} - {music.artist}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function App() {
  return (
    <>
      <SpotifyList title="Exercicio 1" musicList={favList}></SpotifyList>
      <SpotifyList2 title="Exercicio 2" musicList={favList2}></SpotifyList2>
    </>
  )
}

export default App
