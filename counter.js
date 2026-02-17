import { createStore } from "redux"

/*
  Actions:

  { type: "INCREMENT", amount: 3 }
  { type: "DECREMENT", amount: 2 }
 */

const initialState = {
  count: 0
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.amount
      }
    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.amount
      }
    default:
      return state
  }
}

const store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: "INCREMENT", amount: 3 })
store.dispatch({ type: "INCREMENT", amount: 1 })
store.dispatch({ type: "DECREMENT", amount: 2 })
store.dispatch({ type: "INCREMENT", amount: 5 })
store.dispatch({ type: "DECREMENT", amount: 4 })
