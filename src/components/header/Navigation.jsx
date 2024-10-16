import { useContext } from "react";
import { NavLink } from "react-router-dom";
import NavContext from "../../context/navcontext/NavContext";
import { useSelector } from "react-redux";

const Navigation = ({ }) => {
  const userData = useSelector((state) => state.auth.userData)
  const { navToggle, setNavToggle } = useContext(NavContext);
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "Courses", slug: "/courses" },
    { name: "About Us", slug: "/about-us" },
    { name: "Contact Us", slug: "/contact" }
  ];
  if (userData?.role === 'instructor') {
    navItems.push({ name: "Dashboard", slug: "/user/InstructorDashboard" })
  }
  else if (userData?.role === 'learner') {
    navItems.push({ name: "Dashboard", slug: "/user/dashboard" })
  }

  var className = "hidden";
  var liClass = "";
  if (!navToggle) {
    className = "h-1 ";
    liClass = "";
  } else {
    className =
      "flex flex-col bg-white  lightShadow h-52 dark:bg-primary-dark ";
    liClass = "border-y  border-border-dark  rounded-none ";
  }

  return (
    <ul
      className={`navShadow  w-full text-primary-grayText font-bold lg:gap-2 overflow-hidden  absolute  top-16 left-0 z-10 ${className} md:shadow-none md:w-auto md:py-2 lg:px-4 md:flex md:static md:h-auto md:items-center transition-height duration-300`}
    >
      {navItems.map((item) => (
        <li key={item.name}>
          <NavLink
            end
            to={item.slug}
            className={({ isActive }) =>
              `${isActive
                ? "bg-primary-light text-primary"
                : "hover:bg-primary-light hover:text-primary"
              } block px-7  py-3 rounded-lg cursor-pointer ${liClass} transition duration-300 dark:text-dark-nav dark:hover:text-white hover:scale-105`
            }
            onClick={() => {
              setNavToggle(false);
            }}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
