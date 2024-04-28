import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { trainsApi } from "../../features/train/api/getTrains";
import { IInitialState } from "./types";
import idGenerator from "../../features/train/api/utils/idGenerator";

export const getTrains = createAsyncThunk('trains/getTrains', ()=>trainsApi.getTrains())

const initialState : IInitialState = {
  trains : [],
  isLoading : true,
  openedDescriptionId : null
} 

const trainSlice = createSlice({
  name: 'trains',
  initialState,
  reducers : {
    openDescription (state, {payload} : {payload : number}) {
      console.log(payload);
      
      state.openedDescriptionId = payload
    }
  },
  extraReducers(builder) {
    builder
    .addCase(getTrains.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getTrains.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trains = idGenerator(payload);
    })
    .addCase(getTrains.rejected, (state, {error}) => {
      state.isLoading = false;
      console.log(error)
    })
  },
});

export const { openDescription } = trainSlice.actions;

export default trainSlice.reducer;