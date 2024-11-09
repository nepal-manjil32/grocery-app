import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Routes>
        <Route path='/hero' element={<Hero/>} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
  )
}

export default App
