import './App.css';

function TodoItem({ name, taskStatus }) {
  let mark = ' ';
  const isComplete = `${taskStatus} ${mark}`;

  taskStatus ? mark  = '✔' : mark = '❌';

  return (
    <li className="todo-item">
      {name} {taskStatus} {mark}
    </li>
  );
}

//const taskStatus =   => {  === true ?  }

export default function TodoList() {
  return (
    <section>
      <h1>Todo List</h1>
      <ul>
        <TodoItem 
          taskStatus={false} 
          name="Comprar Roupa" 
        />
        <TodoItem 
          taskStatus={false} 
          name="Lavar a louça" 
        />
        <TodoItem 
          taskStatus={true} 
          name="Programar" 
        />
      </ul>
    </section>
  );
}



