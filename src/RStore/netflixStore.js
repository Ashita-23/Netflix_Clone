import { configureStore } from "@reduxjs/toolkit";
import SearchToggle from "./searchToggle";
import AccordionToggle from "./accordionToggle"


const NetFlixStore = configureStore({
    reducer:{
Search_Toggel : SearchToggle,
Accordion_Toggle:AccordionToggle
    }
})


export default NetFlixStore
