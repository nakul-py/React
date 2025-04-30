/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Learn React",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    toggleTodo: (id) => {},
    updateTodo: (id, todo) => {},
});



export function useTodo() {
    const context = useContext(TodoContext);
    return context;
}
export const TodoProvider = TodoContext.Provider;


// also will be written as 

// export const useTodo = () => {
//     return useContext(TodoContext);   
// }

