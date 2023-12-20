import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Layout from './Layout';
import { Contact, Home } from './pages';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import AboutUs from './pages/AboutUs';

function App() {
  const [loading, setloading]=useState(true);
  const dispatch = useDispatch();
useEffect(() => {
  

}, [])

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='/contact-us' element={<Contact />}/>
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/contact' element={<Contact />}/>
    </Route>
  )
)
  return (
    <>
  <RouterProvider router={router} />
    
    </>
  )
}

export default App
