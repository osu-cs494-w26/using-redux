import { useDispatch, useSelector } from "react-redux"

import Button from "./Button"

import { filterValues, selectFilterValue, setVisibilityFilter } from "../redux/visibilityFiltersSlice"

export default function VisibilityFilterButtons() {
    const filterValue = useSelector(selectFilterValue)
    const dispatch = useDispatch()
    return (
        <div className="my-3 flex gap-1">
            <Button
                disabled={filterValue === filterValues.showAll}
                onClick={() => dispatch(setVisibilityFilter(filterValues.showAll))}
            >
                Show all
            </Button>
            <Button
                disabled={filterValue === filterValues.showCompleted}
                onClick={() => dispatch(setVisibilityFilter(filterValues.showCompleted))}
            >
                Show completed
            </Button>
            <Button
                disabled={filterValue === filterValues.showActive}
                onClick={() => dispatch(setVisibilityFilter(filterValues.showActive))}
            >
                Show active
            </Button>
        </div>
    )
}
