import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
      <div className="project-container">
        <div className="table-info">
            <span>Project</span>
            <span>User</span>
            <span>Completion</span>
            <span>Actions</span>
          </div>
        {tasks.length ? (
          <ul className="list">
            {tasks.map(task => {
              return <Task task={task} key={task.id} />;
            })}
          </ul>
        ) : (
          <div className="no-tasks">No Tasks</div>
        )}
      </div>
    </div>
  );
};

export default TaskList;