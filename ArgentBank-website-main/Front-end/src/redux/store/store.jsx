import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../reducers/authSlice";
import { userSlice } from "../reducers/userSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer
    }
}) 