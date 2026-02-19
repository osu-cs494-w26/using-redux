import { useDispatch } from "react-redux"

import Button from "./Button"

import { toggleTodo } from "../redux/todosSlice"

export default function Todo({ text, completed, id }) {
    const dispatch = useDispatch()
    const decoration = completed ? " line-through" : ""
    return (
        <div className="m-1 flex gap-1" completed={completed}>
            <Button onClick={() => dispatch(toggleTodo(id))}>✓</Button>
            <p className={decoration}>{text}</p>
        </div>
    )
}
