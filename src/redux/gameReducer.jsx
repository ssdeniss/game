import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
    name: 'games',
    // Adding games in array
    initialState: {
        currentGame: null
    },
    // Doing actions for example add in card and remove
    reducers: {

        setCurrentGame: (state, action) => {
            state.currentGame = action.payload
        }
    }
})

export const { setCurrentGame } = gamesSlice.actions
export default gamesSlice.reducer