import { configureStore } from "@reduxjs/toolkit";
import trainsReducer from './trainSlice';
export const store = configureStore({
    reducer: {
        trains: trainsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
