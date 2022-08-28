import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Authentication/Login'
import Registration from '../Authentication/Registration'
import Artspage from '../Components/ArtsPage/ArtsPage'
import ComicsPage from '../Components/comics'
import Design from '../Components/Design and Tech/DesignandTech'
import Filmpage from '../Components/FilmPage/Film'
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
          <Route path= "/design-tech" element={<Design/>}/>
          <Route path= "/film" element={<Filmpage/>}/>
          <Route path= "/games" element={<Filmpage/>}/>
          <Route path= "/login" element={<Login/>}/>
          <Route path= "/signup" element={<Registration/>}/>

        </Routes>
    </div>
  )
}
