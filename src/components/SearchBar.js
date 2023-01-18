import React, { useState, createContext } from 'react'
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const SearchBar = () => {

  const [search, setSearch] = useState('');
  console.log(search);

  return (
    <div className='flexrow'>
      <div className='inputs'>
        <input
          type="text"
          placeholder={"Search Project..."}
          // value={}
          onChange={(e) => setSearch(e.target.value)}
          required
          className="project-input"
        />

        <TaskForm />
      </div>

      <TaskList searchValue={search} />
    </div>
    
    
  )
}

export default SearchBar