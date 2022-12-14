import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Bicycle } from './screens'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bicycle/:id' element={<Bicycle />} />
      </Routes>
    </div>
  )
}

export default App
