import { createSlice } from "@reduxjs/toolkit";
import {type ReturnOrder} from '../../type/ReturnOrder';

interface ReturnOrderState {
  returnOrder: ReturnOrder[];
  returnOrderLoading: boolean;
  returnOrderError: boolean;
  returnOrderSuccess: boolean;
  returnOrderMessage: string;
}

const initialState: ReturnOrderState = {
  returnOrder: [],
  returnOrderLoading: false,
  returnOrderError: false,
  returnOrderSuccess: false,
  returnOrderMessage: "",
};

const returnOrderSlice = createSlice({
  name: "returnOrderSlice",
  initialState,
  reducers: {
    setReturnOrder: (state, action) => {
      state.returnOrder = action.payload;
    },
    setReturnOrderLoading: (state, action) => {
      state.returnOrderLoading = action.payload;
    },
    setReturnOrderError: (state, action) => {
      state.returnOrderError = action.payload;
    },
    setReturnOrderSuccess: (state, action) => {
      state.returnOrderSuccess = action.payload;
    },
    setReturnOrderMessage: (state, action) => {
      state.returnOrderMessage = action.payload;
    }
  },
})

export const {
  setReturnOrder,
  setReturnOrderLoading,
  setReturnOrderError,
  setReturnOrderSuccess,
  setReturnOrderMessage,
} = returnOrderSlice.actions

export default returnOrderSlice.reducer;