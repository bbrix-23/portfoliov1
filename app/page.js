"use client";

import React from "react";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import About from "./pages/About/page";
import Stack from "./pages/Stack/page";

import { useMode } from "./context/theme";
import Sidebar from "./components/Sidebar";
import Project from "./pages/Projects/page";

const page = () => {
  const { isDark } = useMode();

  const darkStyle = `bg-[#0A011B] text-white`;
  const lightStyle = `bg-white text-black`;
  const renderStyle = isDark ? darkStyle : lightStyle;

  return (
    //
    <div className={`h-auto ${renderStyle}`}>
      <div className="mx-auto max-w-screen-2xl relative">
        <Header />
        <Sidebar />
        <LandingPage />
        <About />
        {/* <Stack /> */}
        <Project />
      </div>
      {/* <LandingPage /> */}
    </div>
  );
};

export default page;
