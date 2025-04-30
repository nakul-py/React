import React,{useState} from 'react'
import { useTodo }from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo()

    const todoAdd = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({ todo, completed: false });
        setTodo("");
    }

    return (
        <form  onSubmit={todoAdd} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none font-black duration-150 bg-black/45 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}

            />
            <button type="submit" className="rounded-r-lg px-10 py-1 bg-green-600 text-white shrink-0 hover:bg-red-700 duration-150">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


