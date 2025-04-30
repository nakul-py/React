import React ,{useEffect, useState} from 'react'
import './App.css'
import { TodoProvider } from './context';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, {id: Date.now(), ...todo}]);
  }
  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((prevDoto) => (prevDoto.id === id ? todo : prevDoto)));
  }

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevDoto) => prevDoto.id !== id));
  }
  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((prevDoto) => prevDoto.id === id ? {...prevDoto, completed: !prevDoto.completed} : prevDoto));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
    }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  , [todos])

  return (
    <TodoProvider value={{todos, addTodo, removeTodo, toggleTodo, updateTodo}}>
      <div className="bg-[#913ab9] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1> 
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
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
