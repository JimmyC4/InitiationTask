import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import "../AddProject.css";

const AddProject = () => {
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
    <div className='relative-container'>
      <div className='absolute-container'>
        <ul>
            <li className='title'>New Project:</li>

            <form onSubmit={handleSubmit} className="form">

              {/* --------- PROJECT NAME AND USER INPUT --------- */}
              <input
                type="text"
                placeholder={"Project Name..."}
                value={title}
                onChange={handleChange}
                required
                className="project-input-dropdown faded"
              />
              <input
                type="text"
                placeholder={"User..."}
                // value={title}
                // onChange={handleChange}
                required
                className="project-input-dropdown faded"
              />

              {/* --------- CREATE PROJECT / EDIT PROJECT BUTTON --------- */}
              <button type="submit" className="create-task-btn">
                {editItem ? 'Edit Project' : 'Create'}
              </button>
            </form>
            
             
        </ul>
          
      </div>
    </div>
  )
}

export default AddProject