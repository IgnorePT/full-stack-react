
        // Cria o teu primeiro componente em React dentro da tua aplicação com recurso a Toolchain
       
        // Cria um componente chamado App que apresente a seguinte estrutura

  const Results = (props) =>{
    return(
      <div className='club'>
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
        <Results name='Portugal' gol='0' />
        <Results name='Brasil' gol='3' />

      </div>
          
  </div >

  // Extra: Tenta tornar o a div dos clubes em componentes e importa - os dentro da App
