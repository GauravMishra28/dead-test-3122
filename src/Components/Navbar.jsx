import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/arts">Arts</Link>
        <Link to="/comics-illustration">Comics</Link>
        <Link to="/design-tech">Design</Link>
        <Link to="/film">Film</Link>
        <Link to="/login">Login</Link>

    </div>
  )
}

