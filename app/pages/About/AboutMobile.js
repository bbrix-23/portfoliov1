import React from "react";
import Image from "next/image";
import { useMode } from "../../context/theme";
// assets
import phone from "../../assets/phone.svg";
import email from "../../assets/envelope.svg";
import quote from "../../assets/quote.svg";
import Me from "../../assets/yawa.png";
import Background from "../../assets/background.png";

const AboutMobile = () => {
  const { isDark, setDark } = useMode();

  return (
    <div className="relative min-h-screen p-4 mt-20 space-y-5">
      <Image
        src={Background}
        className="absolute -top-24 -left-5"
        width={100}
      />

      <div>
        {/* <p className="text-sm text-gray-50000 font-semibold ">
          Nice to meet you !
        </p> */}

        <h1
          className={`text-3xl font-bold ${
            isDark ? "text-gray-500" : "text-gray-300"
          }`}
        >
          About Me{" "}
        </h1>
      </div>
      <p
        className={`md:text-xl w-25  ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        A software developer, web developer, and a web wesigner are the things
        that really give me a sense of challenge.
        {/* I’m a software developer that is passionate in making things possible.
        As an IT, i believe that in every problem there's always a solution and
        your task is to find it. */}
      </p>
      <div className="flex flex-col space-y-5 ">
        <div className="flex">
          <div className="flex items-center space-x-2">
            <span className="text-4xl tracking-tighter font-bold text-[#6B29BF]">
              1+
            </span>
            <p className={`text  ${isDark ? "text-white" : "text-black"}`}>
              Year Experience as a Front End Web Developer.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center space-x-2">
            <span className="text-4xl tracking-tighter font-bold text-[#6B29BF]">
              7+
            </span>
            <p className={`text  ${isDark ? "text-white" : "text-black"}`}>
              Months Experience as a Full Stack Web Developer.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-5">
            <Image src={phone} width={28} />
            <p>0935642119</p>
          </div>
          <div className="flex items-center space-x-5">
            <Image src={email} width={28} />
            <p>Dacallosbrian123@gmail.com</p>
          </div>
        </div>

        {/* profile  */}
        <div className=" inset-x-0 bottom-14 flex items-center justify-center flex-col space-y-3">
          <Image src={Me} width={150} />
          <div className="flex flex-col items-center ">
            <h1 className="text-2xl font-bold">Brian Dacallos</h1>
            <p className="text-[15px] md:text-xl text-gray-400">
              Software Developer
            </p>
          </div>
          <button
            className={`flex p-2 px-3 bg-[#6B29BF] rounded-lg text-white hover:bg-[#532490]`}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;
