/**
 * 
 * Learn Todo List App use State
 * Cria uma aplicação que receba uma lista de coisas a aprender
 * Desta lista criem uma botão que permita alterar o estado de esse elemento
 * - A lista é um estado
 * - Para remover ou adicionar elementos devemos modificar o estado
 */


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

  
//Link: https://codesandbox.io/p/github/codesandbox/codesandbox-template-vite-react/csb-khrm2r/draft/muddy-surf?file=%2Fsrc%2FApp.tsx&selection=%5B%7B%22endColumn%22%3A37%2C%22endLineNumber%22%3A50%2C%22startColumn%22%3A37%2C%22startLineNumber%22%3A50%7D%5D

import React, { useState } from "react";
import ReactDOM from "react-dom";

const initialTodos = [
  {
    id: "a",
    task: "Learn React",
    complete: true,
  },
  {
    id: "b",
    task: "Learn NodeJS",
    complete: true,
  },
  {
    id: "c",
    task: "Learn MongoDB",
    complete: false,
  },
];

const elementoAdicionar = {
  id: "d",
  task: "Master JS",
  complete: false,
};

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  //console.log(task);
  //console.log(useState);

  const changeStatus = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = (event) => {
    //alert("teste");
    if (task) {
      setTodos(todos.concat({ id: "d", task: "Master JS", complete: false }));
    }
    setTask(" ");
    //event.preventDefault();
  };

  const handleChange = (event) => {
    //alert("teste");
    if (task) {
      alert("Não consigo pensar mais");
    }

    //event.preventDefault();
  };

  return (
    <div className="learn-list">
      <div className="title">
        <h1>My Roadmap</h1>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>

      <button onClick={handleSubmit}>Add Task</button>
      <button onClick={handleChange}>Remove Task</button>
    </div>
  );
};

export default App;
