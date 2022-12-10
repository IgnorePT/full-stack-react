 function TodoItem({ name, isComplete }) {
    return (
      <li className="todo-item">
        {name} {isComplete && '✔'} {!isComplete && '❌'}
      </li>
    );
  }

  const TodoList = () => {
    return (
      <section>
        <h1>Todo List</h1>
        <ul>
          <TodoItem 
            isComplete={true} 
            name="Comprar Roupa" 
          />
          <TodoItem 
            isComplete={true} 
            name="Lavar a louça" 
          />
          <TodoItem 
            isComplete={false} 
            name="Programar" 
          />
        </ul>
      </section>
    );
  } 
   
  export default TodoList