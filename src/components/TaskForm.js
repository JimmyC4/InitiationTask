import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import plus from '../images/icons/plus.png';
import search from '../images/icons/search.png';

const TaskForm = () => {
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
    <form onSubmit={handleSubmit} className="form">
      
      <input
        type="text"
        placeholder={"Project Name..."}
        value={title}
        onChange={handleChange}
        required
        className="project-input"
      />
        <button type="submit" className="button add-task-btn">
          {editItem ? 'Edit Task' : 'Add Project'}
        </button>
        {/* <button className="btn clear-btn" onClick={clearList}>
          Clear All
        </button> */}
        <button className="button filter-btn" onClick="">
          Add Filter
        </button>
    </form>
  )
}

export default TaskForm