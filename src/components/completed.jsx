import React from "react";

const Completed = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  const renderMessage = () => {
    if (completedTodos.length <= 1) {
      return {
        title: "Come on you can do it..!",
        subtitle: `Only ${todos.length} tasks to go`,
      };
    } else if (completedTodos.length < todos.length) {
      return {
        title: `Awesome you have completed ${completedTodos.length} tasks already`,
        subtitle: `Only ${todos.length - completedTodos.length} tasks to go`,
      };
    } else {
      return { title: `Excellent you have completed all the tasks today` };
    }
  };

  if (!todos.length) return null;

  return (
    <div className="completed ui icon message">
      <i className="check circle icon"></i>
      <div className="content">
        <div className="header">{renderMessage().title}</div>
        {renderMessage().subtitle && <p>{renderMessage().subtitle}</p>}
      </div>
    </div>
  );
};

export default Completed;
