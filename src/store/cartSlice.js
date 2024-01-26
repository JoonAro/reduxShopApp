import { createSlice } from "@reduxjs/toolkit";

//Create cartslice.js
//remove getProduct and extra reducers should be empty
//Put only an empty array in the initialState called cart
//no additional logic for the moment
//connect with store and check in redux dev tools

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    //reducers is used for internal application logic. 
    reducers: {
        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload];
        },

        //imagine the above looks like:
        //const addToCart = (state, action) => {
        //     setCart([...state.cart, action.payload])};
    },
    extraReducers: (builder) => { },
    //extraReducers is used for external application logic (for example getting and postin data)
});
//this should be used for reducers NOT extraReducers
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;