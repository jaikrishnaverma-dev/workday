import { createSlice } from "@reduxjs/toolkit";
import { initialFilterState } from "../utils/tools";


const filterSlice = createSlice({
  name: "filter",
  initialState:initialFilterState,
  reducers: {
    setFilter(state,action){
        state[action.payload.key].value = action.payload.value;
    }
  }
});
export const {setFilter} = filterSlice.actions;
export default filterSlice.reducer;
