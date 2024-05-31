import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Layout from "./Layout";
import { AboutUs, Contact, Courses, Home, ProductPage } from "./pages";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Signup } from "./components";


function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/MyClass/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/MyClass/courses" element={<Courses />} />
        <Route path="/MyClass/about-us" element={<AboutUs />} />
        <Route path="/MyClass/contact" element={<Contact />} />
        <Route path="/MyClass/course" element={<ProductPage />} />
        <Route path="/MyClass/signup" element= {<Signup />} />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
