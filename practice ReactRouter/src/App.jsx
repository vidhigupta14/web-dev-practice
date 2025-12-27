import React from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const router=createBrowserRouter([
    {
      path: "/",
      element: <><Nav/><Home/></>
    },
    {
      path: "/about",
      element: <><Nav/><About/></>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
