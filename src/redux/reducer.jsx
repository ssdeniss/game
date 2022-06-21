import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    // Adding games in array
    initialState: {
        itemsInCart: []
    },
    // Doing actions for example add in card and remove
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload) // Push in new array
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
        }
    }
})

export const { setItemInCart, deleteItemFromCart } = cartSlice.actions
export default cartSlice.reducer