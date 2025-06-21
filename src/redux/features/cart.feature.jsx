import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    "items" : []
}

const cartReducer =  createSlice({
    name : "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            let current = state.items
            current.push(action.payload)
            state.items= current
        }
    }
})
export const {addItem} = cartReducer.actions
export default cartReducer.reducer