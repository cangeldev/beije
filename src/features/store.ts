import { configureStore } from "@reduxjs/toolkit";
import beijePedsSlice from "./beijePedsSlice";

export const store = configureStore({
    reducer: {
        beijePeds: beijePedsSlice,
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch