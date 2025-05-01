import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForms'
import TodoItem from './components/TodoItems'

function App() {
  
  const [todosss, setTodos] = useState([])

  const plusTodo = (todo) => {
    setTodos((prevOne) => [...prevOne, {id: Date.now(), ...todo}])
  }
  const updatingTodo = (id, todo) => {
    setTodos((prevOne) => prevOne.map((prevTwo) => (prevTwo.id === id ? todo : prevTwo)))
  }
  const minusTodo = (id) => {
    setTodos((prevOne) => prevOne.filter((prevTwo) => prevTwo.id !== id))
  }
  const toggleOnTodo = (id) => {
    setTodos((prevOne) => prevOne.map((prevTwo) => prevTwo.id === id ? {...prevTwo, completed: !prevTwo.completed} : prevTwo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }
  , [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosss))
  }
  , [todosss])

  return (
    <TodoProvider value={{todosss, plusTodo, minusTodo, toggleOnTodo, updatingTodo}}>
      <div className="bg-[#15857b] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-4 py-3 text-white bg-amber-600">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Add Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todosss.map((todo) => (
                          <div key={todo.id} className="w-full">
                            <TodoItem todo={todo}/> 
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
