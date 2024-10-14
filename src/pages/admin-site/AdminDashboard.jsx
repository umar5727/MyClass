import { faBasketShopping, faBell, faBorderAll, faPencilSquare, faQuestionCircle, faSignOut, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Button } from '../../components'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSignout } from '../../hooks/signout/useSignout'

const fields = [
  { name: "DashBoard", slug: "", icon: faBorderAll, },
  { name: "Courses", slug: "courses", icon: faBasketShopping },
  { name: "Students", slug: "students", icon: faUserGroup },
  { name: "Instructors", slug: "Instructors", icon: faUserGroup },
  { name: "Blocked Users", slug: "bolcked-users", icon: faQuestionCircle },
  { name: "Notifications", slug: "Notifications", icon: faBell },
  { name: "Edit Profile", slug: "editProfile", icon: faPencilSquare },
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
  const { signOutHandler } = useSignout()
  // const [studentsCount, setStudentsCount] = useState(0)
  return (
    <section className=''>
      <div className="my-5 font-medium">
        <main className="flex gap-7 ">
          <section className="leftSide w-[300px] h-full ">
            <div className="w-full flex flex-col gap-[10px] p-5 bg-primary-light rounded-md h-full">
              {fields.map((field, index) => (
                <NavLink
                  end        //'end' when the path ends exactly with that target path. 
                  to={field.slug}
                  className={({ isActive }) => `${isActive ? "bg-primary text-white" : ""} flex gap-2 items-center py-2 px-4 transition duration-300 ease-in-out text-primary hover:text-white hover:bg-primary rounded-md dark:text-white hover:scale-110`}
                  key={index}
                >
                  <FontAwesomeIcon icon={field.icon} />
                  <div>{field.name}</div>
                </NavLink>
              ))}
              <Button
                className={`flex gap-2 items-center py-2 !px-4 !transition duration-500 text-primary hover:text-white hover:bg-primary rounded-md dark:text-white border-none !justify-start hover:scale-110`}
                onClick={signOutHandler}
              >
                <FontAwesomeIcon icon={faSignOut} />
                <div>Log Out</div>
              </Button>
            </div>
          </section>
          {/* left side ends  */}

          <div className="grow rounded-md  ">

            <Outlet />
          </div>
          {/* right side ends */}
        </main>
      </div>

    </section>
  )
}
