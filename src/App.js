import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/add-todo";
import TodoList from "./components/todo-list";
import Completed from "./components/completed";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const markCompleted = (todoId) => {
    setTodos(
      [...todos].map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <AddTodo add={addNewTodo} />
      <TodoList todos={todos} markCompleted={markCompleted} />

      <Completed />
    </div>
  );
}

export default App;
