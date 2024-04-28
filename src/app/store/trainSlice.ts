import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { trainsApi } from "../../features/train/api/getTrains";
import { IInitialState } from "./types";

export const getTrains = createAsyncThunk('trains/getTrains', ()=>trainsApi.getTrains())

const initialState : IInitialState = {
  trains : [],
  isLoading : true
} 

const trainSlice = createSlice({
  name: 'trains',
  initialState,
  reducers : {
    openDescription () {}
  },
  extraReducers(builder) {
    builder
    .addCase(getTrains.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getTrains.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      
      state.trains = payload;
    })
    .addCase(getTrains.rejected, (state, action) => {
      state.isLoading = false;
      console.log(action.error)
    })
  },
});

export const { openDescription } = trainSlice.actions;

export default trainSlice.reducer;