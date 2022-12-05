const musics = (favListObject) => { 
  const listMusics = favListObject.map(music => {
    return (
      <div className="music-card" key={music.idMusica}>
          <img width="100" height= "100"src={music.img} />
          <h3 className="title">{music.nome}1</h3>
          <h5 className="artist">{music.artista}</h5>
      </div>
      )
  })

  return listMusics 
}

const ListaArray02 = ({favListObject}) => {

      return (
          <div className="spotify-card-list">
            {musics(favListObject)}
          </div>
      );
    };
    
    export default ListaArray02;