import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Menu from '../RegistroVehiculo/Menu'



export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<Menu />} />
    </Routes>
  )
}