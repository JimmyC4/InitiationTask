import React, { useState } from 'react'
import AddProject from './AddProject';
import Filter from './Filter';

const TaskForm = () => {
  const [openAddProject, setOpenAddProject ] = useState(false);
  const [openFilter, setOpenFilter ] = useState(false);

  // const [search, setSearch] = useState('');
  // console.log(search);

  return (
    <div className='inputs'>
      {/* <input
        type="text"
        placeholder={"Search Project..."}
        // value={}
        onChange={(e) => setSearch(e.target.value)}
        required
        className="project-input"
      /> */}

        <button className="button add-task-btn" onClick={()=> setOpenAddProject((prev) => !prev)}>
          Add Project
        </button>
        
        {openAddProject && <AddProject/>}
        {openFilter && <Filter/>}

    </div>
    
  )
}

export default TaskForm