import React, { useState, useContext, useEffect } from 'react'
import AddProject from './AddProject';
import Filter from './Filter';

const TaskForm = () => {
  const [openAddProject, setOpenAddProject ] = useState(false);
  const [openFilter, setOpenFilter ] = useState(false);

  const [search, setSearch] = useState('');
  console.log(search);

  const searchProjects = e => {
    e.preventDefault()
    console.log('hello')
    }

  return (
    <div className='inputs'>
      <input
        type="text"
        placeholder={"Search Project..."}
        // value={}
        onChange={(e) => setSearch(e.target.value)}
        required
        className="project-input"
      />

        <button className="button add-task-btn" onClick={()=> setOpenAddProject((prev) => !prev)}>
          Add Project
        </button>

        {/* <button className="button filter-btn" onClick={()=> setOpenFilter((prev) => !prev)}>
          Add Filter
        </button> */}
        
          {openAddProject && <AddProject/>}
          {openFilter && <Filter/>}

    </div>
    
  )
}

export default TaskForm