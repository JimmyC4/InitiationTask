import React from "react";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

import "../App.css";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
            <TaskForm/>
            <TaskList />
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;