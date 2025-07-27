import React from 'react'
import HomePage from './components/Pages/HomePage.jsx'
import ItemsCard from './components/Parts/ItemsCard.jsx'
import AdminWorkBoard from './components/Pages/AdminWorkBoard.jsx'
import Navbar from './components/Parts/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-work-board" element={<AdminWorkBoard />} />
      </Routes> 
    </div>
  )
}

export default App