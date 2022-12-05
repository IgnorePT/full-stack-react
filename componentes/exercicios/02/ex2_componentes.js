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


const Result = (props) => {
  return (
    <div className="club">
      <h3>
        {props.name}
      </h3>
      <h5>
        {props.gol}
      </h5>

    </div>
  )
}

< div class="main" >
  <h2>Copa do Mundo da FIFA 2022™ </h2>

  <div class="jogo">
    <Result name="Portugal" gol="2" />
    <Result name="Uruguai" gol="1" />
  </div>

</div >

