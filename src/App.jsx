import { useEffect, lazy } from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import { AboutUs, Contact, Courses, Home, ProductPage, InstructorSignUp } from "./pages";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,

} from "react-router-dom";
import { Login, ProtectedUser, Signout, Signup } from "./components";



const DashboardLayout = lazy(() => import('./pages/dashboard/DashboardLayout'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))     //lazy loading Dashboard
const MyCourses = lazy(() => import("./pages/dashboard/MyCourses"));
const CreateCourse = lazy(() => import('./pages/dashboard/CreateCourse'))
const EditProfile = lazy(() => import('./pages/dashboard/EditProfile'))
const InstructorDashboard = lazy(() => import('./pages/dashboard/InstructorDashboard'))


function App() {
  const courses = useSelector((state) => state.course.courseData)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/MyClass/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="courses/:courseId"    //dynamic course route
          element={<ProductPage courses={courses} />}
        />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="InstructorSignUp" element={<InstructorSignUp />} />

        <Route element={<ProtectedUser />} >
          {/* Protected user route */}
          <Route path="signOut" element={<Signout />} />
          <Route path="/MyClass/dashboard/" element={<DashboardLayout />} >
            <Route path="" element={<Dashboard />} />
            <Route path="myCourses" element={<MyCourses />} />
            <Route path='editProfile' element={<EditProfile />} />
          </Route>
          <Route path="/MyClass/InstructorDashboard/" element={<DashboardLayout />} >
            <Route path="" element={<InstructorDashboard />} />
            <Route path="myCourses" element={<MyCourses />} />
            <Route path='editProfile' element={<EditProfile />} />
          </Route>
          <Route path='/MyClass/InstructorDashboard/createCourse' element={<CreateCourse />} />

        </Route>
      </Route>,
    ),
  );


  useEffect(() => {

  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
