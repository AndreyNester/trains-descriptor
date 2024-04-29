import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { trainsApi, idGenerator } from "../../features/train/";
import { IInitialState } from "./types";

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