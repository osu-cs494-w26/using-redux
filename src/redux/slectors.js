import { selectTodos } from "./todosSlice"
import { filterValues, selectFilterValue } from "./visibilityFiltersSlice"

export function selectFilteredTodos(state) {
  const todos = selectTodos(state)
  const activeFilter = selectFilterValue(state)
  switch (activeFilter) {
    case filterValues.showCompleted:
      return todos.filter(todo => todo.completed)
    case filterValues.showActive:
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}
