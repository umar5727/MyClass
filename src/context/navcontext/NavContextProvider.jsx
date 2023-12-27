import React, { useState } from "react";
import NavContext from "./NavContext";
const NavContextProvider = ({ children }) => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <NavContext.Provider value={{ navToggle, setNavToggle }}>
      {children}
    </NavContext.Provider>
  );
};
export default NavContextProvider;
