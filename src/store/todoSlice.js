import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 0, text: "finish this ToDo app", date: "Sat Sep 17 2022" },
    { id: 1, text: "make some money", date: "Sat Sep 17 2022" },
    { id: 2, text: "have some fun", date: "Sat Sep 17 2022" },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDoHandler(state, action) {
      state.todos.push(action.payload);
    },
    removeToDoHandler(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
