import { createSlice } from "@reduxjs/toolkit"

export const filterValues = {
  showAll: "filterValues/showAll",
  showCompleted: "filterValues/showCompleted",
  showActive: "filterValues/showActive"
}

const visibilityFiltersSlice = createSlice({
  name: "visibilityFilter",
  initialState: { filter: filterValues.showAll },
  reducers: {
    setVisibilityFilter(state, action) {
      state.filter = action.payload
    }
  },
  selectors: {
    selectFilterValue(sliceState) {
      return sliceState.filter
    }
  }
})

export const { setVisibilityFilter } = visibilityFiltersSlice.actions
export const { selectFilterValue } = visibilityFiltersSlice.selectors
export default visibilityFiltersSlice.reducer
