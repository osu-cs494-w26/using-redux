import { useState } from 'react'

import Button from './Button'

export default function AddTodo() {
    const [ text, setText ] = useState("")
    return (
        <div className="my-4" onSubmit={(e) => {
            e.preventDefault()
            console.log("Added new todo:", text)
            setText("")
        }}>
            <Button>Add todo</Button>
            <input
                className="border border-gray-300 ml-1"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}
