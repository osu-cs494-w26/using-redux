import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import VisibilityFilterButtons from './components/VisibilityFilterButtons'

const todos = [
    {
        text: 'Eat lunch',
        completed: true,
        id: 1
    },
    {
        text: 'Research Redux',
        completed: true,
        id: 2
    },
    {
        text: 'Finish app',
        completed: false,
        id: 3
    }
]

export default function App() {
    const activeTodoCount = todos.reduce(
        (count, todo) => todo.completed ? count : count + 1,
        0
    )
    return (
        <div className="m-2">
            <h1 className="text-3xl font-semibold">Todos ({activeTodoCount} active)</h1>
            <VisibilityFilterButtons />
            <AddTodo />
            <TodoList todos={todos} />
        </div>
    )
}
