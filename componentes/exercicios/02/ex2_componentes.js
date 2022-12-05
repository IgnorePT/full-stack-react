/*
        Cria o teu primeiro componente em React dentro da tua aplicação com recurso a Toolchain
       
        Cria um componente chamado App que apresente a seguinte estrutura
        <div class="main">
          <h2>Copa do Mundo da FIFA 2022™ </h2>

          <div class="jogo">
            <div class="club">
              <h3 > Portugal </h3>
              <h5 class="golos"> 1 </h5>
            </div>

            <div class="club">
              <h3> Uruguai </h3>
              <h5 class="golos"> 0 </h5>
            </div>
          </div>
          
        </div>

        Extra: Tenta tornar o a div dos clubes em componentes e importa-os dentro da App
      */
const App = (promps) => {
  console.log(promps);
  return (
    <div className="main">
      <h2>Copa do Mundo da FIFA 2022™</h2>
      <div className="jogo">
        <Club team={promps.teamA} goals={promps.goalsTeamA} />
        <Club team={promps.teamB} goals={promps.goalsTeamB} />
      </div>
    </div>
  );
};

const Club = (club) => {
  return (
    <div className="club">
      <h3> {club.team} </h3>
      <h5 className="goals"> {club.goals} </h5>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App teamA="Portugal" goalsTeamA="2" teamB="Uruguai" goalsTeamB="0" />
);
