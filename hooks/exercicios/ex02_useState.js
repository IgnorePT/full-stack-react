/**
 * 
 * Learn Todo List App use State
 * Cria uma aplicação que receba uma lista de coisas a aprender
 * Desta lista criem uma botão que permita alterar o estado de esse elemento
 * - A lista é um estado
 * - Para remover ou adicionar elementos devemos modificar o estado
 */

 const initialTodos = [
    {
      id: "a",
      task: "Learn React",
      complete: true
    },
    {
      id: "b",
      task: "Learn NodeJS",
      complete: true
    },
    {
      id: "c",
      task: "Learn MongoDB",
      complete: false
    }
  ];

  const elementoAdicionar = {
    id: "d",
    task: "Master JS",
    complete: false
  }

  /**
   * Estrutura
   * 
    <div class="learn-list">
        <div class="title">
            My Roadmap
        </div>
        <ul>
            <li>Elemento da lista</li>
        </ul>

        <button>Remover ultimo Elemento</button>
        <button>Adicionar Elemento</button>
    </div>

    No onClick devemos remover deve efetuar a ação que esta marcada
   */

  