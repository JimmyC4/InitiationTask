import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import "../AddProject.css";

const Filter = () => {
  const [openFilter, setOpenFilter ] = useState(false);
  
  return (
    <div className='relative-container'>
      <div className='absolute-container absolute-container2'>
        <ul>
          <span><input type="checkbox" className="checkbox"/>User</span>
          <span><input type="checkbox" className="checkbox"/>Is Completed</span>   
        </ul>
      </div>
    </div>
  )
}

export default Filter