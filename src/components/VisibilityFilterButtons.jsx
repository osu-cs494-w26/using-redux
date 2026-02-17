import Button from "./Button"

export default function VisibilityFilterButtons() {
    return (
        <div className="my-3 flex gap-1">
            <Button disabled>Show all</Button>
            <Button>Show completed</Button>
            <Button>Show active</Button>
        </div>
    )
}
