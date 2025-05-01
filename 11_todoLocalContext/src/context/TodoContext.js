/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todosss:[
        {
            id: 1,
            todo: "Learn Context Api with localstorage",
            completed: false,

        }
    ],
    plusTodo: (todo) => {},
    minusTodo: (id) => {},
    toggleOnTodo: (id) => {},
    updatingTodo: (id, todo) => {},
});

export function useTodoo(){
    return useContext(TodoContext);
    
}
export const TodoProvider = TodoContext.Provider;