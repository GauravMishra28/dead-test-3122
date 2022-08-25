import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Box display="flex"  
            letterSpacing='wide'
            fontSize='xl'
            justifyContent="space-around">
      <Box>
        <Link to="/">Home</Link>
      </Box>
      <Box>
        <Link to="/arts">Arts</Link>
        </Box>
        <Box>
        <Link to="/comics-illustration">Comics</Link>
        </Box>
        <Box>
        <Link to="/design-tech">Design</Link>
        </Box>
        <Box>
        <Link to="/film">Film</Link>
        </Box>
        <Box>
        <Link to="/login">Login</Link>
        </Box>
        </Box>

    </div>
  )
}

