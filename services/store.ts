import { configureStore } from "@reduxjs/toolkit";
import countSlice from './CounterSlice';

const store = configureStore({
    reducer:{
        count:countSlice,
    },
    devTools:true,
});

export default store;
// extract the RootState type from the store
export type RootState = ReturnType<typeof store.getState>;
// extract the Dispatch type so they can be referenced as needed
export type AppDispatch = typeof store.dispatch;