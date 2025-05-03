import React, {useState} from 'react'
import { useDispatch } from 'react-redux' // dispatch used reducers to change values in the store
import { addTodo } from '../features/slice/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (!input){
            alert("enter valid todo")
            return}
            dispatch(addTodo( newTodo )) // dispatch the addTodo action with the input value
        setInput('')
    }
    const newTodo = {
        title: input,
        
      }; 

    
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12 flex justify-center">
      <input
        type="text"
        className="bg-gray-800 text-center rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
    )
}

export default AddTodo
