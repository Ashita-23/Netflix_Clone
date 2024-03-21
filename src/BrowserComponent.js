import DoSearchPage from "./Components/Browse_Components/doSearchPage"
import Browse from './Components/Browse_Components/Browse'
import {  useSelector } from 'react-redux';
import Navigation from "./Components/Browse_Components/header"

const BrowseComponent = ()=>{
      const togglePage = useSelector((store)=>store.Search_Toggel.IsShow)
//   console.log(togglePage,"togglePage")
    return(<>
    <Navigation></Navigation>
{
  togglePage? <Browse></Browse>: <DoSearchPage></DoSearchPage>
}
    </>)
}

export default BrowseComponent