import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../screens/HomeScreen'
import { LadingPageScreen } from '../screens/LadingPageScreen'

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<Navigate to="/"/>} />
            <Route path="programacion-desde-cero-con-python" element={<LadingPageScreen />} />
        </Routes>
        
    </>
  )
}
