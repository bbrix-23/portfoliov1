import React from "react";
import { UseBreakpoints } from "@/app/context/breakpoints";
import ProjectDesktop from "./ProjectDesktop";
import ProjectMobile from "./ProjectMobile";

const page = () => {
  const { isMobile } = UseBreakpoints();

  return <>{isMobile ? <ProjectMobile /> : <ProjectDesktop />}</>;
};

export default page;
