import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/slice/todoSlice';

export const store = configureStore({
    reducer : todoReducer
});