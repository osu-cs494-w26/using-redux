import { useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from './Button'
import { addTodo } from '../redux/todosSlice'

export default function AddTodo() {
    const [ text, setText ] = useState("")
    const dispatch = useDispatch()
    return (
        <form className="my-4" onSubmit={(e) => {
            e.preventDefault()
            console.log("Added new todo:", text)
            dispatch(addTodo(text))
            setText("")
        }}>
            <Button>Add todo</Button>
            <input
                className="border border-gray-300 ml-1"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    )
}
