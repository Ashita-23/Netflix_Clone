// import SignIn from './Components/Sign_in_components/Sign_in';
import './App.css';
import Browse from './Components/Browse_Components/Browse'
import Navigation from './Components/Browse_Components/header';
import DoSearchPage from "./Components/Browse_Components/doSearchPage"




function App() {
  return (<>
  {/* <SignIn/> */}
<Navigation></Navigation>
  {/* <Browse></Browse> */}
  <DoSearchPage></DoSearchPage>

  </>  );
}

export default App;
