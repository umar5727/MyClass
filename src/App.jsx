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
const InstructorDashboard = lazy(() => import('./pages/dashboard/InstructorDashboard'))


function App() {
  const courses = useSelector((state) => state.course.courseData)
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/MyClass/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/MyClass/courses" element={<Courses />} />
        <Route path="/MyClass/about-us" element={<AboutUs />} />
        <Route path="/MyClass/contact" element={<Contact />} />
        <Route
          path="/MyClass/courses/:courseId"    //dynamic course route
          element={<ProductPage courses={courses} />}
        />
        <Route path="/MyClass/signup" element={<Signup />} />
        <Route path="/MyClass/login" element={<Login />} />
        <Route path="/MyClass/InstructorSignUp" element={<InstructorSignUp />} />

        <Route element={<ProtectedUser />} >
          {/* Protected user route */}
          <Route path="/MyClass/signOut" element={<Signout />} />
          <Route path="/MyClass/dashboard" element={<DashboardLayout />} >
            <Route path="" element={<Dashboard />} />
            <Route path="/MyClass/dashboard/myCourses" element={<MyCourses />} />
          </Route>

          <Route path="/MyClass/InstructorDashboard" element={<InstructorDashboard />} />
          <Route path='/MyClass/InstructorDashboard/createCourse' element={<CreateCourse />} />
        </Route>
      </Route>,
    ),
  );


  useEffect(() => {

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
