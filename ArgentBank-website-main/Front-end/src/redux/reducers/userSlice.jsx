import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user", 
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
    },

    reducers: {
        addUserData: (state, action) => {
            state.email = action.payload.email
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.userName = action.payload.userName
        },
        editUserName: (state, action) => {
            state.userName = action.payload
        }
    }
})

export const {addUserData, editUserName} = userSlice.actions