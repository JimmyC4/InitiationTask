import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import "../AddProject.css";

const AddProject = () => {
    const [openAddProject, setOpenAddProject ] = useState(false);

    const { addTask, editTask, editItem } = useContext(TaskListContext)
    const [title, setTitle] = useState('')
    const [user, setUser] = useState('')  

    const handleSubmit = e => {
      e.preventDefault()

      if (!editItem) {
        addTask(title, user)
        setTitle('')
        setUser('')
        console.log(title)
        console.log(user)
      } else {
        editTask(title, user, editItem.id)
      }
    }

    const handleChange = e => {
      setTitle(e.target.value)
    }
    const handleUserChange = e => {
      setUser(e.target.value)
    }

    useEffect(() => {
      if (editItem) {
        setTitle(editItem.title)
        setUser(editItem.user)
        console.log(editItem)
      } else {
        setTitle('')
        setUser('')
      }
    }, [editItem])

  return (
    <div className='relative-container'>
      <div className='absolute-container'>
        <ul>
            <li className='title'>{editItem ? 'Edit Project:' : 'New Project:'}</li>

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
                value={user}
                onChange={handleUserChange}
                required
                className="project-input-dropdown faded"
              />

              {/* --------- CREATE PROJECT / EDIT PROJECT BUTTON --------- */}
              <button type="submit" className="create-task-btn">
                {editItem ? 'Save' : 'Create'}
              </button>
            </form>
            
             
        </ul>
          
      </div>
    </div>
  )
}

export default AddProject