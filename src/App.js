import React from "react";
import "./App.css";
import AddTodo from "./components/add-todo";
import TodoList from "./components/todo-list";
import Completed from "./components/completed";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />

      <Completed />
    </div>
  );
}

export default App;
