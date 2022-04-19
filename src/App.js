import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Accessories from './pages/Accessories/Accessories';
import Clothes from './pages/Clothes/Clothes';
import Gadgets from './pages/Gadgets/Gadgets';
import Laptops from './pages/Laptops/Laptops';
import Watches from './pages/Watches/Watches';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';
import { onAuthStateChanged } from 'firebase/auth';
import { useCartContext } from './cartContext';
import { auth } from './firebase';

// const promise = loadStripe(
//   "pk_test_51KqEocSDIO3F06PvJ3Zmgb0j9l3aa36wh7PpOEUfoxHYwWtxVOB6i2JCoJMlVw5OVMJbCexK1ju7a7AbGmWUHasU00jkP7RsjD"
// );

function App() {

  let location = useLocation();
  const [{ user }, dispatch] = useCartContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log("the user", authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/accessories' element={<Accessories />}></Route>
        <Route exact path='/clothes' element={<Clothes />}></Route>
        <Route exact path='/gadgets' element={<Gadgets />}></Route>
        <Route exact path='/laptops' element={<Laptops />}></Route>
        <Route exact path='/watches' element={<Watches />}></Route>
        <Route exact path='/checkout' element={<CheckOut />}></Route>
        <Route exact path='/payment' element={<Payment />}></Route>
        <Route exact path='/orders' element={<Orders />}></Route>
      </Routes>
      {location.pathname === '/login' ? null : <Footer />}
    </div>
  );
}

export default App;
