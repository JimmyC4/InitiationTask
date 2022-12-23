import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import plus from '../images/icons/plus.png';
import search from '../images/icons/search.png';
import AddProject from './AddProject';

const TaskForm = () => {
  const [openAddProject, setOpenAddProject ] = useState(false);

  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <div className='inputs'>
      <input
        type="text"
        placeholder={"Project Name..."}
        value={title}
        onChange={handleChange}
        required
        className="project-input"
      />
        <button className="button add-task-btn" onClick={()=> setOpenAddProject((prev) => !prev)}>
          Add Project
        </button>

        {
          openAddProject && <AddProject/>
        }
        

        <button className="button filter-btn" onClick="">
          Add Filter
        </button>
    </div>
  )
}

export default TaskForm