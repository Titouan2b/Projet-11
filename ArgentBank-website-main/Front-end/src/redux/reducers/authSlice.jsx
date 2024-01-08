import {createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth", 
    initialState: {
        token: "",
    },

    reducers: {
        loginUser: (state, action) => {
            state.token = action.payload.token
        },
        logout: (state) => {
            state.token = ""
        }
    }
})

export const {loginUser, logout} = authSlice.actions