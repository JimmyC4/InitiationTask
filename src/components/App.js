import React from "react";
import "../App.css";
import TaskListContextProvider from "../contexts/TaskListContext";
import SearchBar from "./SearchBar";
// import TaskForm from "./TaskForm";
// import TaskList from "./TaskList";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
            <SearchBar />
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;