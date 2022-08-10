import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import transactionService from "../services/transaction.service";

const initialState = {
    transactions: [],
    status: "idle"
}

export const fetchTransactions = createAsyncThunk(
    "transaction/fetchTransactions",
    async () => {
        const data = await transactionService.getAllTransaction();
        return data;
    }
)

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
        }
    }
});

const { reducer } = transactionSlice;
export default reducer;
export const selectAllTransations = (state) => state.transaction.transactions;