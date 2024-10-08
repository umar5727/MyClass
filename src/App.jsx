import { useEffect, lazy } from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import { AboutUs, Contact, Courses, Home, ProductPage, InstructorSignUp, ErrorPage } from "./pages";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,

} from "react-router-dom";
import { Loading, Login, ProtectedUser, Signout, Signup } from "./components";



const DashboardLayout = lazy(() => import('./pages/dashboard/DashboardLayout'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))     //lazy loading Dashboard
const MyCourses = lazy(() => import("./pages/dashboard/MyCourses"));
const EditProfile = lazy(() => import('./pages/dashboard/EditProfile'))
// InstructorDashboard 
const InstructorDashboard = lazy(() => import('./pages/dashboard/InstructorDashboard'))
const CreateCourse = lazy(() => import('./pages/dashboard/CreateCourse'))
// AdminDashboard
const AdminDashboard = lazy(() => import('./pages/admin-site/AdminDashboard'))
const AllCourses = lazy(() => import('./pages/admin-site/Courses'))

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        {/* <Route path="" element={<Loading />} /> */}
        <Route path="courses" element={<Courses />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="courses/:courseId"    //dynamic course route
          element={<ProductPage />}
        />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="InstructorSignUp" element={<InstructorSignUp />} />
        {/* Protected user route */}

        <Route path="/user/" element={<ProtectedUser />} >
          <Route path="signOut" element={<Signout />} />
          <Route path="dashboard/" element={<DashboardLayout />} exact>
            <Route path="" element={<Dashboard />} exact />
            <Route path="myCourses" element={<MyCourses />} />
            <Route path='editProfile' element={<EditProfile />} />
          </Route>
          <Route path="/user/InstructorDashboard/" element={<DashboardLayout />} >
            <Route path="" element={<InstructorDashboard />} exact />
            <Route path="myCourses" element={<MyCourses />} />
            <Route path='editProfile' element={<EditProfile />} />
          </Route>
          <Route path='/user/InstructorDashboard/createCourse' element={<CreateCourse />} />
        </Route >

        <Route path="/Admin/" element={<AdminDashboard />} >
          <Route path="dashboard" element={''} />
          <Route path="signOut" element={<Signout />} />
          <Route path='courses' element={<AllCourses />} />
          {/* <Route path='Notification' element={<AdminNotification />} /> */}
        </Route>


        <Route path='*' element={<ErrorPage />} />
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
