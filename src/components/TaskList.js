import React, { useContext, useState } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

import Task from "./Task";
import chilling from '../images/icons/chilling.png';

const TaskList = (props) => {
  const { tasks } = useContext(TaskListContext);
  // let { search } = props.searchValue;
  const [ search ] = ' '; // Shows some of the code with this 
  

  return (
    <div>
      <div className="project-container">
        <div className="table-info">
            <span className="constrainSize">Project</span>
            <span className="constrainSize">User</span>
            <span className="constrainSize">Completion</span>
            <span className="constrainSize">Actions</span>
          </div>
        {tasks.length ? (
          <ul className="list">
            {tasks.filter((task) => {
              return search.toString().toLowerCase() === '' ? task : task.title.toLowerCase().includes(search);
            }).map(task => {
              return <Task task={task} key={task.id} />;
            })}
            {/* {tasks.map(task => {
              return <Task task={task} key={task.id} />;
            })} */}
          </ul>
        ) : (
          <div className="no-tasks">
            <img src={chilling} width="33%" height="33%" />
            <div>No projects yet! Create one above.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList