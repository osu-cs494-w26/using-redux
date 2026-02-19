import { configureStore } from "@reduxjs/toolkit"
import todosReducer, { todosSlice } from "./todosSlice"
import visibilityFilterReducer from "./visibilityFiltersSlice"

console.log("== todosSlice:", todosSlice)
const { addTodo } = todosSlice.actions
console.log("== add todo action:", addTodo("This is a new todo"))

const store = configureStore({
  reducer: {
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
  }
})

store.subscribe(() => console.log(store.getState()))

export default store
