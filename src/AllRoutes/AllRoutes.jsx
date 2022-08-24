import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Authentication/Login'
import Registration from '../Authentication/Registration'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path= "/" element={<h1>Home</h1>}/>
          <Route path= "/arts" element={<h1>Arts</h1>}/>
          <Route path= "/comics-illustration" element={<h1>Comics</h1>}/>
          <Route path= "/design-tech" element={<h1>Design</h1>}/>
          <Route path= "/film" element={<h1>film</h1>}/>
          <Route path= "/login" element={<Login/>}/>
          <Route path= "/signup" element={<Registration/>}/>

        </Routes>
    </div>
  )
}
