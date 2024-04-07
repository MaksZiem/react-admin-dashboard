import React from 'react'
import { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { UseSelector } from 'react-redux'
import Navbar from 'components/Navbar'
import { Outlet } from 'react-router-dom'


//dzieki box moge dawac cssa

const Layout = () => {
  return (
    <Box width="100%" height='100%' >
        <Box>
            <Navbar />
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout
