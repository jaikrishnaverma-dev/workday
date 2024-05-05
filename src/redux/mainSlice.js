import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postReq } from "../utilities/tools";
const initialState = {
  jobs: [],
  loading: true,
  message: "",
};
export const fetchJobs = createAsyncThunk("jobs/fetchData", async (payload) => {
  const data = await postReq(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    payload
  );
  return data;
});
const mainSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        console.log({P:action.payload});
        state.jobs = action.payload.data.jdList;
        state.totalCount = action.payload.data.totalCount;
        state.loading = false;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.nessage = "something wents wrong. Try again";
      });
  },
});
export const {} = mainSlice.actions;
export default mainSlice.reducer;
