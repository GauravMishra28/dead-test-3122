import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Authentication/Login'
import Registration from '../Authentication/Registration'
import Artspage from '../Components/ArtsPage/ArtsPage'
import ComicsPage from '../Components/comics'
import Homepage from '../Components/Home/Homepage'
import ProductPage from '../Components/Home/ProductPage'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path= "/" element={<Homepage/>}/>
          <Route path="/:id" element={<ProductPage/>}/>
          <Route path= "/arts" element={<Artspage/>}/>
          <Route path= "/comics-illustration" element={<ComicsPage/>}/>
          <Route path= "/design-tech" element={<h1>Design</h1>}/>
          <Route path= "/film" element={<h1>film</h1>}/>
          <Route path= "/login" element={<Login/>}/>
          <Route path= "/signup" element={<Registration/>}/>

        </Routes>
    </div>
  )
}
