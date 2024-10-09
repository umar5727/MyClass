import { faBasketShopping, faBell, faBorderAll, faPencilSquare, faQuestionCircle, faSignOut, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Button } from '../../components'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const fields = [
  { name: "DashBoard", slug: "./dashboard", icon: faBorderAll, },
  { name: "Courses", slug: "./courses", icon: faBasketShopping },
  { name: "Students", slug: "./students", icon: faUserGroup },
  { name: "Instructors", slug: "./", icon: faUserGroup },
  { name: "Blocked Users", slug: "./", icon: faQuestionCircle },
  { name: "Notifications", slug: "./", icon: faBell },
  // { name: "Create Course", slug: "/InstructorDashboard/createCourse" },
  { name: "Edit Profile", slug: "/user/InstructorDashboard/editProfile", icon: faPencilSquare },
  { name: "Sign Out", slug: "/Admin/signOut", icon: faSignOut },
]
// useEffect(() => {
//     setStudentsCount(0)

//     if (userCourses) {
//         userCourses.map((course) => {

//             setStudentsCount((prev) => prev + course.studentsCount)
//         })
//     }
// }, [userCourses])
export default function Dashboard() {
  const userData = useSelector((state) => state.auth.userData)
  const userCourses = useSelector((state) => state.auth.userCoursesData)
  // const [studentsCount, setStudentsCount] = useState(0)
  return (
    <section>

      <div className="mt-5 font-medium">
        {/* <div className='w-screen my-0 m-[calc(-50vw+50%)] '>

          <img src={bannerImg} alt="banner" className='w-full h-52 object-cover' />
        </div> */}

        <main className="grid grid-cols-4 gap-7 mt-7 mb-10">
          <section className="leftSide ">
            <div className="flex flex-col gap-[10px] p-5 bg-primary-light rounded-md">
              {fields.map((field, index) => (
                <NavLink
                  end        //'end' when the path ends exactly with that target path. 
                  to={field.slug}
                  className={({ isActive }) => `${isActive ? "bg-primary text-white" : ""} flex gap-2 items-center py-2 px-4 transition-colors duration-500 text-primary hover:text-white hover:bg-primary rounded-md dark:text-white `}
                  key={index}
                >
                  <FontAwesomeIcon icon={field.icon} />
                  <div>{field.name}</div>
                </NavLink>
              ))}
            </div>
          </section>
          {/* left side ends  */}

          <div className="col-span-3">

            <Outlet />
          </div>
          {/* right side ends */}
        </main>
      </div>

    </section>
  )
}