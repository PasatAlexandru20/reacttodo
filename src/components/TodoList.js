import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

// Todo  LIST
function TodoList() {
  const [todos, setTodos] = useState([]);
  //Adaugare todo + spatiu in text
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // Add  newTodo
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  //   Edit/Update Todo
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos(prev =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    // Adaugare functionalitate Complete/Remove/Edit
    <div className="todo-title">
      <h1>Things To Do</h1>
      {/* <h2>Wish you a wonderful day</h2> */}
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
