const musics = (favList) => {
  const listMusics = favList.map((music, index) => {
    return (
      <li className="music" key={index}>
        {music}
      </li>
    );
  });

  return listMusics;
};
const ListaArray01 = ({ favList }) => {
  return (
    <div className="spotify-fav">
      <ul className="music-list">{musics(favList)}</ul>
    </div>
  );
};

export default ListaArray01;
