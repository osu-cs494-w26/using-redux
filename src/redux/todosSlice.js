import { createSlice } from '@reduxjs/toolkit'

let currentId = 1
export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({
        id: currentId++,
        text: action.payload,
        completed: false
      })
    },
    toggleTodo(state, action) {
      const todo = state.find(t => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const selectTodos = todosSlice.selectSlice
export const { addTodo, toggleTodo } = todosSlice.actions
export default todosSlice.reducer
