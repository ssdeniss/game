import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./reducer";
import gameReducer from "./gameReducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gameReducer,
    }
})