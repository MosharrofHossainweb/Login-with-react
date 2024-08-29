import React from 'react'
import Login from './Component/Login'
import './App.css'
import Navbar from './Component/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
const App = () => {

const rout = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home/>} /> 
    <Route path='/Login' element={<Login/>}/>
    <Route path='/About' element={<About/>}/>
  </Route>

))

  return (
    <div>
      
      
      <RouterProvider router={rout}/>

    </div>
  )
}

export default App
