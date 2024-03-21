import { configureStore } from "@reduxjs/toolkit";
import SearchToggle from "./searchToggle";
import AccordionToggle from "./accordionToggle"
import FormToogle from "./formToggle"
import UserSlice from "./userSlice";


const NetFlixStore = configureStore({
    reducer:{
Search_Toggel : SearchToggle,
Accordion_Toggle:AccordionToggle,
Form_Toogle:FormToogle,
User_Slice:UserSlice
    }
})


export default NetFlixStore
