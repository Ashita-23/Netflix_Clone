import './App.css';
import {  RouterProvider, createBrowserRouter} from 'react-router-dom';
import SignIn from './Components/Sign_inup_components/Sign_in';
// import Navigation from './Components/Browse_Components/header';
import BrowseComponent from './BrowserComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { AddUser, RemoveUser } from './RStore/userSlice';
// import Navigation from './Components/Browse_Components/header';



function App() {

  const dispatch=useDispatch()

const AppRouter = createBrowserRouter([
  {path:"/",
   element:<SignIn></SignIn>},
   {
    path:"/browse",
    element:<BrowseComponent/>
   }
])

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName} = user;
      // ...
      dispatch(AddUser({uid:uid,email:email,displayName:displayName}))
      
    } else {
      // User is signed out
      // ...
      dispatch(RemoveUser())
      
    }
  });
},[])


  return (<div>
<RouterProvider router={AppRouter}/>
  </div>  );
}

export default App;
