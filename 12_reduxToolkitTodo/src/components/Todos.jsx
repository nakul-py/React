import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/slice/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editableTodoId, setEditableTodoId] = React.useState(null)
  const [editedTitle, setEditedTitle] = React.useState("")

  const handleEditClick = (todo) => {
    setEditableTodoId(todo.id)
    setEditedTitle(todo.title)
  }

  const handleSaveClick = (todo) => {
    dispatch(updateTodo({ id: todo.id, title: editedTitle }))
    setEditableTodoId(null)
    setEditedTitle("")
  }

  return (
    <>
    <div className='flex justify-center'>
      <h1 className='text-amber-500 text-3xl font-bold mt-10 text-center bg-gray-800 py-4 rounded w-1/5'>Your Todos</h1>
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <div key={todo.id} className='flex justify-center'>
            <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded-2xl w-6/12 h-16">
              {editableTodoId === todo.id ? (
                <input
                  className="text-2xl px-2 py-1 rounded"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  autoFocus
                />
              ) : (
                <div className='text-white text-3xl'>{todo.title}</div>
              )}
              <div className='flex items-center'>

              <button
                className="w-10 h-10 rounded-lg text-sm border border-black/10 justify-center bg-gray-50 hover:bg-gray-300 shrink-0 disabled:opacity-50 ml-2"
                onClick={() => {
                  if (editableTodoId === todo.id) {
                    handleSaveClick(todo)
                  } else {
                    handleEditClick(todo)
                  }
                }}
              >
                {editableTodoId === todo.id ? "📁" : "✏️"}
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="ml-2 text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-900 rounded text-md w-10 h-10 flex justify-center items-center"
              >
                🗑️
              </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </>
  )
}

export default Todos