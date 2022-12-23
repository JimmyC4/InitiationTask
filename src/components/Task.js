import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import edit from '../images/icons/edit.png';
import remove from '../images/icons/delete.png';

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span className="taskTitle">{task.title}</span>

        <span className="userName">James Kang</span>

        <input type="checkbox" className="checkbox constrainSize"/>
        <div className="actions constrainSize">
          <button className="btn-edit action-btn" onClick={() => findItem(task.id)}>
            <img src={edit} width="15" height="15" />
          </button>

          <button className="btn-delete action-btn" onClick={() => removeTask(task.id)}>
            <img src={remove} width="15" height="15" />
          </button>{''}
        </div>
        
    </li>
  )
}

export default Task