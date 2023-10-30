import React from 'react'
import { Routes, Route } from 'react-router-dom'



import MenuPrincipal from '../RegistroVehiculo/Menu'
import RegistrodeVehiculo from '../RegistroVehiculo/RegistroVehiculos'
import ListadodeVehiculo from '../RegistroVehiculo/ListadodeVehiculos'
import EditarRegistroVehiculo from '../RegistroVehiculo/EditarRegistroVehiculo'
import RegistrodeEntrada from '../RegistroVehiculo/RegistrodeEntradas'
import RegistrodeSalida from '../RegistroVehiculo/RegistrodeSalida'
import ListadoEntradaSalida from '../RegistroVehiculo/ListadoEntradaSalida'
import Home from '../Home/Home'

export default function Router2() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/menuPrincipal" element={<MenuPrincipal />} />
      <Route path="/RegistrodeVehiculo" element={<RegistrodeVehiculo />} />
      <Route path="/ListadodeVehiculo" element={<ListadodeVehiculo />} />
      <Route path="/EditarRegistroVehiculo" element={<EditarRegistroVehiculo />} />
      <Route path="/RegistrodeEntrada" element={<RegistrodeEntrada />} />
      <Route path="/RegistrodeSalida" element={<RegistrodeSalida />} />
      <Route path="/ListadoEntradaSalida" element={<ListadoEntradaSalida />} />

    </Routes>
  )
}