import { configureStore } from '@reduxjs/toolkit'
import returnOrderSlice from './returnOrder/returnOrderSlice';

export const store = configureStore({
    reducer: {
        returnOrder: returnOrderSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch