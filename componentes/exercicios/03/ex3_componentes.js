/**
 * Conditional Rendering
 * 
 * Exercicio 1:  Utiliza o operador Ternario (? :) para colocar o ❌ 
 * caso a tarefa nao esteja completa
 * 
 * 
 */

 function TodoItem({ name, isComplete }) {
    return (
      <li className="todo-item">
        {name} {isComplete && '✔'}
      </li>
    );
  }
  
  export default function TodoList() {
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
