import { createSlice } from "@reduxjs/toolkit"
const initialState= {
    numberofCakes:10    
}
const cakeSlice = createSlice({
    name:"cake",
    initialState,
    reducers:{
        ordered:(state) => {
            state.numberofCakes--
        },
        restocked:(state,action) => {
            state.numberofCakes += action.payload
        }
    }
})
export default  cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions