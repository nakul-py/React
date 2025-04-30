import React from "react";
import { useTodo } from "../context/TodoContext";
function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = React.useState(false);
    const [todoMsg, setTodoMsg] = React.useState(todo.todo);
    const {updateTodo, removeTodo, toggleTodo} = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    }
    const toggleCompleted = () => {
        toggleTodo(todo.id);
    };
    

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-black duration-300 font-bold text-black ${
                todo.completed ? "bg-[#80e628]" : "bg-[#d4711f]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
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
                onClick={() => removeTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;