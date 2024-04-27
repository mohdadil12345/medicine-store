

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Medicines from './Medicines'
import MediDetails from './MediDetails'
import Login from './Login'
import Signup from './Signup'
import PrivateRoute from './PrivateRoute'
import Cartpage from './Cartpage'
import Offer from './Offer'
import Paymentt from './Paymentt'
import Address from './Address'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            {/* <Route path = "/medicine" element = { <PrivateRoute>
              <Medicines/>
            </PrivateRoute>}/> */}
           <Route path = "/medicine" element = {<Medicines/>}/>
          
            <Route path = "/medicine/:id" element = {<MediDetails/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/signup" element = {<Signup/>}/>
            {/* <Route path = "/cart" element = {<Cartpage/>}/> */}
            <Route path = "/cart" element = {<PrivateRoute><Cartpage/></PrivateRoute>}/>
            <Route path = "/offer" element = {<Offer/>}/>
            <Route path = "/pay" element = {<Paymentt/>}/>
            <Route path = "/address" element = {<Address/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes