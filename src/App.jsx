import { useState, useEffect, useContext, lazy } from "react";
import { useDispatch } from "react-redux";
import Layout from "./Layout";
import { AboutUs, Contact, Courses, Home, ProductPage, InstructorSignUp } from "./pages";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Login, ProtectedUser, Signout, Signup } from "./components";

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))     //lazy loading Dashboard
const InstructorDashboard = lazy(() => import('./pages/dashboard/InstructorDashboard'))


function App() {
  // const dispatch = useDispatch();
  // const lodingHandler = () => {
  // }
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
        <Route path="/MyClass/InstructorSignUp" element={<InstructorSignUp />} />

        <Route element={<ProtectedUser />} >
          {/* Protected user route */}
          <Route path="/MyClass/signOut" element={<Signout />} />
          <Route path="/MyClass/dashboard" element={<Dashboard />} />
          <Route path="/MyClass/InstructorDashboard" element={<InstructorDashboard />} />
        </Route>
      </Route>,
    ),
  );


  useEffect(() => {

    // const currentUser = fetch("http://localhost:8000/api/v1/users/register", {
    //   mode: "cors",
    //   method: "POST",
    // })
    //   .then((currentUser) => {
    //     currentUser.json();
    //     if (currentUser.data) {
    //       loginUser = currentUser.data;
    //       dispatch(login({ loginUser }));
    //     } else {
    //       dispatch(logout());
    //     }
    //   })
    //   .finally(() => setLoading(false));
    // lodingHandler();

    //loading setup


  }, []);

  return (
    <>
      <RouterProvider router={router} />
      {/* {loading ? <div>loading...</div> : <div> </div>} */}
    </>
  );
}

export default App;
