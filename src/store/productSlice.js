import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = response.data;
        //const status = response.status;
        //return response.data might cause issues
        return data;
    }
)
const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
    },
    //reducers is used for internal application logic. 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
        /*  .addCase(getProducts.rejected, (state, action) => {
             state.products = [];
         }) */
    },
    //extraReducers is used for external application logic (for example getting and postin data)
});

export default productSlice.reducer;