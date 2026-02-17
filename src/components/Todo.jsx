import Button from "./Button"

export default function Todo({ text, completed, id }) {
    const decoration = completed ? " line-through" : ""
    return (
        <div className="m-1 flex gap-1" completed={completed}>
            <Button>✓</Button>
            <p className={decoration}>{text}</p>
        </div>
    )
}
