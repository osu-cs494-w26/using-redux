import { useSelector } from 'react-redux'

import Todo from './Todo'

import { selectFilteredTodos } from '../redux/slectors'

export default function TodoList() {
    const todos = useSelector(selectFilteredTodos)
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </div>
    )
}
