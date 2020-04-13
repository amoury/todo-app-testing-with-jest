import React from "react";

const Completed = () => {
  return (
    <div className="completed ui icon message">
      <i className="check circle icon"></i>
      <div className="content">
        <div className="header">Awesome you have completed 5 tasks today</div>
        <p>Only 4 more tasks to go</p>
      </div>
    </div>
  );
};

export default Completed;
