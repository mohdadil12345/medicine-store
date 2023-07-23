

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Medicines from './Medicines'
import MediDetails from './MediDetails'
import Login from './Login'
import Signup from './Signup'
import PrivateRoute from './PrivateRoute'
import Payment from './Payment'
import Cartpage from './Cartpage'
import Offer from './Offer'
import Order from './Order'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/medicine" element = { <PrivateRoute>
              <Medicines/>
            </PrivateRoute>}/>
            <Route path = "/medicine/:id" element = {<MediDetails/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/signup" element = {<Signup/>}/>
            <Route path = "/payment" element = {<Payment/>}/>
            <Route path = "/cart" element = {<PrivateRoute><Cartpage/></PrivateRoute>}/>
            <Route path = "/offer" element = {<Offer/>}/>
            <Route path = "/order" element = {<Order/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes