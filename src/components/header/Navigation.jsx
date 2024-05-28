import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavContext from "../../context/navcontext/NavContext";

const Navigation = ({}) => {
  const { navToggle, setNavToggle } = useContext(NavContext);
  const navItems = [
    // { name: "Home", slug: "/MyClass/" },
    { name: "Courses", slug: "/MyClass/courses" },
    { name: "About Us", slug: "/MyClass/about-us" },
    { name: "Contact Us", slug: "/MyClass/contact" },
  ];
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
            to={item.slug}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-primary-light text-primary"
                  : "hover:bg-primary-light hover:text-primary"
              } block px-7  py-3 rounded-lg  cursor-pointer ${liClass} transition-colors duration-300 dark:text-dark-nav`
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
