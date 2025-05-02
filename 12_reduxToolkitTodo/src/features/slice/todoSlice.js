import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, title: "Learn Redux Toolkit", completed: false,} // component or state
    ],
}

// also can be writtten as 

// export const todoSlice = createSlice({
//     name: "todo",
//     initialState : {
//     todos: [
//         { id: 1, title: "Learn Redux Toolkit", completed: false,}
//     ],}
// })

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {   // always get state and action from redux toolkit
            const todo = {
                id: nanoid(),
                title: action.payload.title,  // get the title from action.payload  // payload is used for passing data from component to reducer
                completed: false,
            }
            state.todos.push(todo);  // push the todo to the state
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id); // filter the todos and remove the todo with the id
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id); // find the todo with the id
            if (todo) {
                todo.completed = !todo.completed; // toggle the completed state
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo} = todoSlice.actions; // export the actions to use in the component
export default todoSlice.reducer; // export the reducer to use in the store

