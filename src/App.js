import './App.css';
import {BrowserRouter,Routes,Route }from "react-router-dom"
import Home from './Home/Home';
import Header from "./Header/Header";
import Login from './Login/Login';
import { useEffect } from 'react';
import {auth} from "./firebase"
import { useStateValue } from './StateProvider';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer'
import Payment from './Payment/Payment';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"


const promise = loadStripe("pk_test_51MqIo2SHcP4QE2roPVjaKTfaHQMLJM1foOL7HWD7V4SsHPc8DfYUhSazniTDTKzpfMjA6hvSbKVAM2bVXCfhEHBR00s4JD9Jh8")

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
          <Route path='/' element={<div><Header/> <Home/><Footer/></div>}/>
          <Route path='/payment'  element={<div><Header/> 
            <Elements stripe = {promise}>
              <Payment/>
            </Elements>
          <Footer/></div>}/>
          <Route path='/checkout' element={<div><Header/> <Checkout/> <Footer/></div>}/>
          <Route path='/login' element={<Login/>}/>

        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
