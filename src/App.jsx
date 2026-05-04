import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Teamscore from './pages/teamscore';
export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="teamscore/:type" element = {<Teamscore />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

