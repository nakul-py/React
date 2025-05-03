import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <div className='flex justify-center'>
     <h1 className='text-3xl font-bold text-center mt-10 bg-gray-800 text-white py-4 rounded w-5/12  '>Todo App with 
      <span className='text-indigo-500'> Redux</span> and 
      <span className='text-indigo-500'> Redux Toolkit</span>
    </h1>
    </div>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
