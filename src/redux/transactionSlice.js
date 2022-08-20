import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transactionService from "../services/transaction.service";
const initialState = {
    transactions: [],
    status: "idle"
};

export const fetchTransactions = createAsyncThunk(
    "transaction/fetchTransactions",
    async () => {
        const data = await transactionService.getAllTransaction();
        console.log(data);
        return data;
    }
);

export const exportWithdrawRequest = createAsyncThunk(
  "transaction/exportWithdrawRequest",
  async () => {
    const data = await transactionService.exportWithdrawRequest();
    return data;
  }  
);

export const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    extraReducers: {
        [fetchTransactions.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchTransactions.fulfilled]: (state, { payload }) => {
            state.transactions = payload;
            state.status = "success";
        },
        [fetchTransactions.rejected]: (state, action) => {
            state.status = "failed";
        },
        [exportWithdrawRequest.pending]: (state, action) => {
            state.status = "loading";
        },
        [exportWithdrawRequest.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [exportWithdrawRequest.rejected]: (state, action) => {
            state.status = "failed";
        }
    }
});

const { reducer } = transactionSlice;
export default reducer;
export const selectAllTransations = (state) => state.transaction.transactions;