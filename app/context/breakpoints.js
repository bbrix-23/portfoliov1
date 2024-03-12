"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const ContextP = createContext();

export const UseBreakpoints = () => {
  return useContext(ContextP);
};

const breakpoints = ({ children }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isMobile, setMobile] = useState(false);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Add an event listener to the window's resize event
      window.addEventListener("resize", handleResize);

      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (viewportWidth <= 420) {
      setMobile(true);
    }
  }, [viewportWidth]);

  return <ContextP.Provider value={{ isMobile }}>{children}</ContextP.Provider>;
};

export default breakpoints;
