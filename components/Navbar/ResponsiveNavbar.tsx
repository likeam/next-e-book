"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavbarHandler = () => setShowNav(true);
  const closeNavbarHandler = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={openNavbarHandler} />
      <MobileNavbar showNav={showNav} closeNav={closeNavbarHandler} />
    </div>
  );
};

export default ResponsiveNavbar;
