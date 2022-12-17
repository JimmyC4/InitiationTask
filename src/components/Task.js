import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import edit from '../images/icons/edit.png';
import remove from '../images/icons/delete.png';

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span className="constrainSize">{task.title}</span>

        <span className="constrainSize">James Kang</span>

        <input type="checkbox" />

        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <img src={edit} width="15" height="15" />
        </button>

        <button className="btn-delete task-btn" onClick={() => removeTask(task.id)}>
          <img src={remove} width="15" height="15" />
        </button>{''}
    </li>
  )
}

export default Task