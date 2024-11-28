import React from 'react';
import { MainLayout } from "./layouts/MainLayout";

import { Dashboard } from "./pages/Dashboard";
import { AllExplore } from "./pages/AllExplore";
import { AllProducts } from "./pages/AllProducts";
import { LoginSignup } from "./pages/LoginSignup";
import  ProductDetails  from "./pages/ProductDetails";
import CheckoutPage from './pages/CheckoutPage';
import Cart from './pages/Cart';

import {Login} from "./components/Login";
import {SignUp} from "./components/SignUp";

import {AuthContextProvider} from "./contexts/AuthContextProvider"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <AuthContextProvider>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard/>} > 
            <Route path='explore' element = { <AllExplore/> }/>
            <Route path="/register" element={<LoginSignup/>} >
              <Route path='login' element = { <Login/> }/>
              <Route path='signup' element = { <SignUp/> }/>
            </Route>
          </Route>

          <Route path='/cart' element = {<Cart/>} >
            <Route path='checkout' element = {<CheckoutPage/>} />
          </Route>

          <Route path='/products' element = {<AllProducts/>} />
          <Route path='/products/:productid' element= {<ProductDetails/>}/>

        </Routes>
      </MainLayout>
    </AuthContextProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
