//feito na minha aplicação qualquer-coisa

function App() {

  function Club (props){
    return (
      <div className = 'club'>
        <h3> {props.equipa}</h3>
        <h5 className="golos">{props.golo}</h5>
      </div>
    )
  }
  

  return (
      <div className="main">
          <h2>Copa do Mundo FIFA 20222</h2>
          <div className="jogo">
            <Club equipa={"Portugal"} golo={"0"}/>
            <Club equipa={"Uruguai"}  golo={"1"}/>
          </div>
      </div>
  );
}

export default App;