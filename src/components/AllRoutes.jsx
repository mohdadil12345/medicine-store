

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Medicines from './Medicines'
import MediDetails from './MediDetails'
import Login from './Login'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/medicine" element = {<Medicines/>}/>
            <Route path = "/medicine/:id" element = {<MediDetails/>}/>
            <Route path = "/login" element = {<Login/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes