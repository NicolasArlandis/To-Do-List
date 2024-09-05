import React from 'react'


// Componente que representa uma tarefa individual
const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      {/* Conteúdo da tarefa */}
      <div className="content">
        <p>{todo.text}</p>
        <p>({todo.category})</p>
      </div>
      {/* Botões para completar e remover a tarefa */}
      <div>
        <button className='complete' onClick={() => completeTodo(todo.id)}> Completar </button>
        <button className='remove' onClick={() => removeTodo(todo.id)}> X </button>
      </div>
    </div>
  )
}

export default Todo
