import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Nav from './modules/Nav.jsx'
import About from './modules/About.jsx'
import Contact from './modules/Contact.jsx'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Nav /><h1>Home</h1></>
    },
    {
      path: '/About',
      element: <><Nav /><About/></> 
    },
    {
      path: '/Contact',
      element: <><Nav /><Contact/></> 
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
