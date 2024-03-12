import React from "react";
import Image from "next/image";
import Me from "../../assets/yawa.png";
import Background from "../../assets/background.png";

// assets
import phone from "../../assets/phone.svg";
import email from "../../assets/envelope.svg";
import quote from "../../assets/quote.svg";

const About = () => {
  return (
    <div className="h-screen container mt-10 relative flex items-center  py-20  space-x-10">
      <Image
        style={{
          top: "-150px",
          left: "-200px",
        }}
        src={Background}
        className="absolute"
        width={250}
      />
      <div className="flex w-1/3 flex-col items-center space-y-5">
        <p className="text-lg font-semibold ">Nice to meet you !</p>
        <h1 className="text-5xl font-bold">Know me </h1>
        <Image src={Me} width={300} />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">Brian Cesar I. Dacallos</h1>
          <p className="text-lg text-gray-400">Software Developer</p>
        </div>
        <button
          className={`flex p-2 px-3 font-semibold bg-[#6B29BF] rounded-lg text-white hover:bg-[#532490]`}
        >
          Download CV
        </button>
      </div>
      <div className="flex relative flex-1 flex-col space-y-12 px-5  pt-10 h-5/6">
        <p className="text-xl">
          " I’m a software developer that is{" "}
          <span className="text-[#6B29BF] font-semibold">Passionate</span> in
          making things possible. "{" "}
        </p>
        {/* contacts */}
        <div className="info space-y-3 ps-10">
          <div className="flex items-center space-x-2">
            <Image src={phone} width={32} />
            <p className="text-lg   ">0935642119</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={email} width={32} />
            <p className="text-lg   ">Dacallosbrian123@gmail.com</p>
          </div>
        </div>
        {/* contacts */}

        {/* experience */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center">
            <div className="flex items-center space-x-3 w-80">
              <span className="text-5xl tracking-tighter font-bold text-[#6B29BF]">
                1+
              </span>
              <p className="text-xl text-white">
                Year Experience as a Front End Web Developer
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-3 w-80">
              <span className="text-5xl tracking-tighter font-bold text-[#6B29BF]">
                7+
              </span>
              <p className="text-xl text-white">
                Months Experience as a Full Stack Web Developer
              </p>
            </div>
          </div>
        </div>
        {/* experience */}
        <p className="text-lg">
          I'm passionate and dedicated to my work as Web Developer since 2022.{" "}
        </p>

        {/* qute */}
        <div className="bg-[#1C1A2F]  flex items-center px-5 py-3 border-l-8 rounded-r-xl">
          <Image src={quote} />
          <p className="text-xl">
            I can do all things through Christ which strengtheneth me.
          </p>
        </div>
      </div>
      <Image
        src={Background}
        className="absolute -bottom-20 -right-36"
        width={250}
      />
    </div>
  );
};

export default About;
