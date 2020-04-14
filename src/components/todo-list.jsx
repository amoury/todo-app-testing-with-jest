import React from "react";
import TodoItem from "./todo-list-item";

const TodoList = () => {
  return (
    <div className="ui middle aligned divided list todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default TodoList;
