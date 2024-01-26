import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
    },
    reducers: {},
    extraReducers: (builder) => { }
});

export default productSlice.reducer;