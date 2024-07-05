import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Profile from "./Profile";
import NavToggle from "./NavToggle";
import Container from "../Container";
import ToggleTheme from "./ToggleTheme";
import NavContext from "../../context/navcontext/NavContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { setNavToggle } = useContext(NavContext)

  const user = useSelector((state) => state.auth.userData);

  // useEffect starts 

  useEffect(() => {
    window.addEventListener("resize", () => setNavToggle(false));

  }, []);
  return (
    <header id="myClass" className="w-full relative">
      <Container>
        <div className="flex justify-between items-center bg-white h-16 dark:bg-primary-dark transition-colors duration-200">
          <Logo />
          <Navigation />
          <div className="flex gap-1 justify-center items-center">


            <ToggleTheme />

            <NavToggle />
            {
              !user
                ?
                <div>
                  <Link to='/MyClass/login' className="font-bold bg-primary-light px-2 py-2 rounded-md text-primary hover:bg-primary dark:text-white hover:text-white outline outline-1 transition-colors duration-500 dark:outline-primary text-sm sm:px-4 sm:py-2">
                    Log in
                  </Link>
                </div>
                :
                <Profile />
            }

          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
