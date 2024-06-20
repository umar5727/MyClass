import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Layout from "./Layout";
import { AboutUs, Contact, Courses, Home, ProductPage } from "./pages";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { InstructorDashboard, Login, Signup } from "./components";
import { login, logout } from "./app/features/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const currentUser = fetch("http://localhost:8000/api/v1/users/register", {
      mode: "cors",
      method: "POST",
    })
      .then((currentUser) => {
        currentUser.json();
        if (currentUser.data) {
          loginUser = currentUser.data;
          dispatch(login({ loginUser }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/MyClass/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/MyClass/courses" element={<Courses />} />
        <Route path="/MyClass/about-us" element={<AboutUs />} />
        <Route path="/MyClass/contact" element={<Contact />} />
        <Route path="/MyClass/course" element={<ProductPage />} />
        <Route path="/MyClass/signup" element={<Signup />} />
        <Route path="/MyClass/login" element={<Login />} />
        <Route path="/MyClass/dashboard" element={<InstructorDashboard />} />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
      {loading ? <div>loading...</div> : <div> </div>}
    </>
  );
}

export default App;
