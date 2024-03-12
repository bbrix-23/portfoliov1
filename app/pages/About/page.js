import React, { useEffect, useState } from "react";
import About from "./AboutDesktop";
import AboutMobile from "./AboutMobile";

const Page = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

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
  }, []); // Empty dependency array to run this effect only once

  return <>{viewportWidth >= 420 ? <About /> : <AboutMobile />}</>;
};

export default Page;
