import React,{useState} from 'react'
import { useTodoo }from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const {plusTodo} = useTodoo()

    const addingTodo = (e) => {
        e.preventDefault();
        if (!todo) return;
        plusTodo({ todo, completed: false });
        setTodo("");
    };
    

    return (
        <form onSubmit={addingTodo} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-black/80 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-10 py-1 bg-purple-800 text-white shrink-0 hover:bg-blue-700 duration-150">
                Add
            </button>
        </form>
    );
}

export default TodoForm;