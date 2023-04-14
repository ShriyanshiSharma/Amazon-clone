import './App.css';
import {BrowserRouter,Routes,Route }from "react-router-dom"
import Home from './Home/Home';
import Header from "./Header/Header";
import Login from './Login/Login';
import { useEffect } from 'react';
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';
import Checkout from './Checkout/Checkout';



function App() {
  const [{},dispatch] = useStateValue();

  
useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<div><Header/> <Home/></div>}/>
          <Route exact path='/checkout' element={<div><Header/> <Checkout/></div>}/>
          <Route exact path='/login' element={<Login/>}/>

        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
