import React from "react";
import { UseBreakpoints } from "@/app/context/breakpoints";
import StackDesktop from "./StackDesktop";
import StackMobile from "./StackMobile";

const page = () => {
  const { isMobile } = UseBreakpoints();

  return <div>{isMobile ? <StackMobile /> : <StackDesktop />}</div>;
};

export default page;
