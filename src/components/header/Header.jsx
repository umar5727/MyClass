import React, { useContext, useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Profile from "./Profile";
import NavToggle from "./NavToggle";
import Container from "../Container";
import ToggleTheme from "./ToggleTheme";
import NavContextProvider from "../../context/navcontext/NavContextProvider";
import NavContext from "../../context/navcontext/NavContext";

const Header = () => {
  const {setNavToggle}=useContext(NavContext)
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
            <Profile />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
