import { configureStore } from "@reduxjs/toolkit";
import SearchToggle from "./searchToggle";


const NetFlixStore = configureStore({
    reducer:{
Search_Toggel : SearchToggle
    }
})


export default NetFlixStore
