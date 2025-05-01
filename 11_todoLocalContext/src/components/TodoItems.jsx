import React,{useState} from 'react'
import { useTodoo } from '../context/TodoContext';

function TodoItem({ todo }) {
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const { updatingTodo, minusTodo, toggleOnTodo} = useTodoo();

    const editTodo = () => {
        updatingTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    }

    const todoIsCompleted = () => {
        toggleOnTodo(todo.id);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 font-bold shadow-sm shadow-black/50 duration-300  text-black ${
                todo.completed ? "bg-[#0c9b0c]" : "bg-[#1266b4]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={todoIsCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => minusTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;