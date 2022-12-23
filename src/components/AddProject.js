import React from 'react'
import "../AddProject.css";

function AddProject() {
  return (
    <div className='relative-container'>
      <div className='absolute-container'>
        <ul>
            <li className='title'><strong>New Project:</strong></li>
            <input
              type="text"
              placeholder={"Project Name..."}
              // value={title}
              // onChange={handleChange}
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
             
        </ul>
          <button type="submit" className="create-task-btn">
              Create
          </button>
      </div>
    </div>
  )
}

export default AddProject