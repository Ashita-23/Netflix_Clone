import { createSlice } from "@reduxjs/toolkit";


const  AccordionToggle = createSlice({
    name:"Accordion Toggle",
    initialState:{
        IsOpen:false
    },
    reducers:{
        ShowAccordion:(state)=>{
            state.IsOpen=!state.IsOpen
        },
        // HideAccordion:(state,action)=>{
        //     state.IsOpen.push(action.payload)
        // }
    }
})


export const {ShowAccordion}= AccordionToggle.actions
export default AccordionToggle.reducer