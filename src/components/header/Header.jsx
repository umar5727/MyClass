import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Profile from "./Profile";
import NavToggle from "./NavToggle";
import Container from "../Container";
import ToggleTheme from "./ToggleTheme";
import NavContextProvider from "../../context/navcontext/NavContextProvider";
import NavContext from "../../context/navcontext/NavContext";
import { useSelector } from "react-redux";
import Button from "../Button";
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
                  <Link to='/MyClass/signup' className="font-semibold bg-primary-light px-4 py-2 rounded-md text-primary hover:bg-primary dark:text-white hover:text-white outline outline-1 transition-colors duration-500 dark:outline-primary">
                    Sign Up
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
