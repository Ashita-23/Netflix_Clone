// import SignIn from './Components/Sign_in_components/Sign_in';
import './App.css';
import Browse from './Components/Browse_Components/Browse'
import Navigation from './Components/Browse_Components/header';
import DoSearchPage from "./Components/Browse_Components/doSearchPage"
import {  useSelector } from 'react-redux';





function App() {

  const togglePage = useSelector((store)=>store.Search_Toggel.IsShow)
  // console.log(togglePage,"togglePage")

  return (<>
<Navigation></Navigation>
{
  togglePage? <Browse></Browse>: <DoSearchPage></DoSearchPage>
}

  </>  );
}

export default App;
