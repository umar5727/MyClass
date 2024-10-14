import { lazy } from "react";
import Layout from "./Layout";
import { AboutUs, Contact, Courses, Home, ProductPage, InstructorSignUp, ErrorPage } from "./pages";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,

} from "react-router-dom";
import { Login, ProtectedUser, Signup } from "./components";



const DashboardLayout = lazy(() => import('./pages/dashboard/DashboardLayout'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))     //lazy loading Dashboard
const MyCourses = lazy(() => import("./pages/dashboard/MyCourses"));
const EditProfile = lazy(() => import('./pages/dashboard/EditProfile'))
const Wishlist = lazy(() => import('./pages/dashboard/Wishlist'))
// InstructorDashboard 
const InstructorDashboard = lazy(() => import('./pages/dashboard/InstructorDashboard'))
const CreateCourse = lazy(() => import('./pages/dashboard/CreateCourse'))
// AdminDashboard
const AdminDashboard = lazy(() => import('./pages/admin-site/AdminDashboard'))
const AllCourses = lazy(() => import('./pages/admin-site/Courses'))
const AdminNotification = lazy(() => import('./pages/admin-site/Notifications'))
const Instructors = lazy(() => import('./pages/admin-site/Instructors'))
const Students = lazy(() => import('./pages/admin-site/Students'))
const BlockedUsers = lazy(() => import('./pages/admin-site/BlockedUsers'))

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
          <Route path="dashboard/" element={<DashboardLayout />} exact>
            <Route path="" element={<Dashboard />} exact />
            <Route path="myCourses" element={<MyCourses />} />
            <Route path='editProfile' element={<EditProfile />} />
            <Route path='wishlist' element={<Wishlist />} />
          </Route>
          <Route path="/user/InstructorDashboard/" element={<DashboardLayout />} >
            <Route path="" element={<InstructorDashboard />} exact />
            <Route path="myCourses" element={<MyCourses />} />
            <Route path='editProfile' element={<EditProfile />} />
          </Route>
          <Route path='/user/InstructorDashboard/createCourse' element={<CreateCourse />} />
        </Route >

        {/* admin routes  */}
        <Route path="/Admin/" element={<AdminDashboard />} >
          <Route path='courses' element={<AllCourses />} />
          <Route path='students' element={<Students />} />
          <Route path='Instructors' element={<Instructors />} />
          <Route path='Notifications' element={<AdminNotification />} />
          <Route path='editProfile' element={<EditProfile />} />
          <Route path='bolcked-users' element={<BlockedUsers />} />
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
