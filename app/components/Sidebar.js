import React, { useEffect } from "react";
import { useMode } from "../context/theme";
import Image from "next/image";
import Logo from "../assets/Logo.svg";
import LogoDark from "../assets/LogoDark.svg";
import CloseIcon from "../assets/closeDark.svg";
import CloseIconLight from "../assets/closeLight.svg";
import toggleOn from "../assets/toggleOnWhite.svg";
import toggleOff from "../assets/toggleOnBlack.svg";
import toggleRightDark from "../assets/toggleRightDark.svg";

// socials assets
import Facebook from "../assets/facebook.svg";
import Email from "../assets/email.svg";
import Github from "../assets/github.svg";
import FacebookW from "../assets/facebookWhite.svg";
import EmailW from "../assets/envelopeWhite.svg";
import GithubW from "../assets/githubWhite.svg";

const Sidebar = () => {
  const { isNavOpen, isDark, setNavOpen, setDark } = useMode();

  // Calculate the width based on isNavOpen
  const sidebarWidth = isNavOpen ? "100%" : "0";

  // Calculate the left margin based on isNavOpen
  const marginLeft = isNavOpen ? "0" : "-20rem";

  // Calculate the opacity for the fade-in/out effect
  const opacity = isNavOpen ? "1" : "0";

  // Calculate the transition duration
  const transitionDuration = isNavOpen ? "0.3s" : "0.5s";

  useEffect(() => {
    // Disable scrolling on the body when the sidebar is open
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen]);
  return (
    <div
      style={{
        width: sidebarWidth,
        marginLeft: marginLeft,
        opacity: opacity,
        transition: `width ${transitionDuration} ease-in-out, opacity ${transitionDuration} ease-in-out`,
      }}
      className={`absolute opacity-10 flex flex-col space-y-20  ${
        isDark ? " bg-[#161818] text-white" : "bg-[#FEFEFE] text-black"
      } z-10 top-0 left-0  bottom-0 flex`}
    >
      <div className=" flex  flex-col  relative h-screen w-full p-5 pt-7 py-5 overflow-hidden">
        <div className="header flex items-center justify-between">
          <div className="logo flex items-center space-x-2">
            <Image src={!isDark ? Logo : LogoDark} width={25} />
            <p className="text-2xl font-bold">BRIX</p>
          </div>

          <Image
            className="cursor-pointer "
            onClick={() => {
              setNavOpen(false);
            }}
            src={!isDark ? CloseIcon : CloseIconLight}
            width={28}
          />
        </div>

        <ul className="flex flex-col space-y-10 mt-20">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a href="#">EXPERIENCES</a>
          </li>
          <li className="flex items-center text-md">
            THEME
            <Image
              className="ml-5 cursor-pointer"
              width={30}
              onClick={() => setDark(!isDark)}
              src={(() => {
                let icon;
                if (!isDark) {
                  icon = toggleOn;
                } else {
                  icon = toggleRightDark;
                }
                return icon;
              })()}
            />
          </li>
        </ul>
        <div className="absolute flex flex-col items-center space-y-3 bottom-10 self-center justify-center">
          <div className="flex items-center space-x-5">
            <Image
              className="cursor-pointer "
              src={!isDark ? Facebook : FacebookW}
              width={28}
            />
            <Image
              className="cursor-pointer"
              src={!isDark ? Github : GithubW}
              width={28}
            />
            <Image
              className="cursor-pointer"
              src={!isDark ? Email : EmailW}
              width={!isDark ? 35 : 28}
            />
          </div>
          {/* <div className="bg-[#6B29BF] w-[80px] h-0.5"></div> */}

          <p className="text-gray-400 text-sm">Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
