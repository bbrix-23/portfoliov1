"use client";
import React from "react";
import myImage from "../assets/me.png";
import Image from "next/image";
import { useMode } from "../context/theme";
import ArrowLight from "../assets/arrowRight.svg";
import Background from "../assets/background.png";
import Typewriter from "typewriter-effect";

// socials assets
import Facebook from "../assets/facebook.svg";
import Email from "../assets/email.svg";
import Github from "../assets/github.svg";
import FacebookW from "../assets/facebookWhite.svg";
import EmailW from "../assets/envelopeWhite.svg";
import GithubW from "../assets/githubWhite.svg";

// import {}
const LandingPage = () => {
  const { isDark, setDark } = useMode();

  return (
    // <div className="flex items-center justify-around h-screen overflow-hidden">
    <div className="flex z-0 relative flex-col items-center md:flex-row overflow-hidden  h-screen  p-5">
      <div className="container flex flex-col mb-4 md:h-full items-start justify-center mt-28  space-y-10">
        <div className="typography space-y-4 md:space-y-5">
          {/* <p className="text-3xl font-light">I'm</p> */}
          {/* <h1 className="text-2xl">
            <Typewriter
              options={{
                strings: [
                  "Hello...",
                  "Bonjour...",
                  "Ciao...",
                  "你好...",
                  "안녕하세요...",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1> */}
          <div className="flex items-center space-x-2">
            <p
              className={`text-[16px] md:text-xl w-25  ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              What i do?
            </p>
            <h1 className="text-lg md:text-2xl text-[#6B29BF] font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Web Development.",
                    "UI / UX Design.",
                    "Q.A Tester.",
                    // "Ciao...",
                    // "你好...",
                    // "안녕하세요...",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                  changeDeleteSpeed: 500,
                }}
              />
            </h1>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-7xl font-bold">
              Brian <span className="text-[#6B29BF]">Dacallos</span>
            </h1>
            <div className="bg-[#6B29BF] w-[120px] h-1"></div>
          </div>
          <p
            className={`text-[16px] md:text-xl w-25 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            A software developer that is inspired to do greater things with the
            help of emerging technology.
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <button
            className={`flex p-2 px-3 bg-[#6B29BF] rounded-lg text-white hover:bg-[#532490]`}
          >
            Hire Me
            {/* <Image src={ArrowLight} width={25} /> */}
          </button>
          <button className="underline underline-offset-1 hover:font-bold rounded-lg  py-2 px-4">
            My Works
          </button>
        </div>

        {/* socials */}
        <div className="hidden md:block flex flex-col space-y-3 ">
          <p className="text-sm md:text-lg text-gray-350">Connect with me</p>
          <div className="icons flex items-center space-x-3">
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
            {/* <Image className="cursor-pointer" src={Facebook} width={25} />
            <Image className="cursor-pointer" src={Github} width={25} />
            <Image className="cursor-pointer" src={Email} width={25} /> */}
          </div>
        </div>

        {/* <Image
          src={Background}
          className="absolute"
          width={500}
          style={{ bottom: "-350px" }}
        /> */}
      </div>

      {/* body image */}
      <div className="flex md:static justify-center md:h-screen items-end w-full z-0">
        <Image
          src={myImage}
          className="w-64  md:w-full absolute bottom-5 md:static"
        />
      </div>
      {/* <img src="./myPic.png" height={100} width={200} alt="ay" /> */}
    </div>
  );
};

export default LandingPage;
