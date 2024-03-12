import React from "react";
import Image from "next/image";
import Me from "../../assets/Hero.png";
import Background from "../../assets/background.png";

// assets
import phone from "../../assets/phone.svg";
import email from "../../assets/envelope.svg";
import quote from "../../assets/quote.svg";
import { useMode } from "@/app/context/theme"; 

const details = [
  {
    id:1,
    label:"name",
    value:"brian cesar i. dacallos"
  },
  {
    id:2,
    label:"phone",
    value:"+63 9948973176"
  },
  {
    id:3,
    label:"email",
    value:"dacallosbrian123@gmail.com"
  },
  {
    id:4,
    label:"location",
    value:"Navotas Manila, Philippines"
  },
  {
    id:5,
    label:"education",
    value:"city of malabon university"
  },
  {
    id:6,
    label:"age",
    value:"24"
  },

]

{/* <div className="space-y-1">
<h6 className="font-bold">Name</h6>
<p className="text-gray-500">Brian Cesar I. Dacallos</p>
</div>

<div className="space-y-1">
<h6 className="font-bold">Phone</h6>
<p className="text-gray-500">+63 9948973176</p>
</div>


<div className="space-y-1">
<h6 className="font-bold">Email</h6>
<p className="text-gray-500">+63 9948973176</p>
</div> */}

const About = () => {
  const { isDark, setDark } = useMode();

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
      <div className="flex flex-col items-center space-y-10">
        {/* <p className="text-lg font-semibold ">ABOUT ME</p> */}
       
        <Image  src={Me} width={550} />
     
      </div>
      <div className="flex-1 px-20 space-y-10 ">
        <h3 className="font-bold text-2xl">Personal Information</h3>

        <div className="space-y-1 grid grid-cols-2 gap-4 pl-5">
          {details?.map((item)=>(
              <div className="space-y-1">
                <h6 className="font-bold capitalize">{item?.label}</h6>
                <p className={`${isDark ? "text-gray-400":"text-gray-500"} ${item?.label !== 'email' ? 'capitalize':item.value.charAt(0).toUpperCase()}`}>{item?.value}</p>
              </div>
            ))}
        </div>
        
        <div className="bg-[#1C1A2F] text-white  flex items-center px-5 py-3 border-l-8 rounded-r-xl">
          <Image src={quote} />
          <p className="text-lg">
            I can do all things through Christ which strengtheneth me.
          </p>
        </div>

      </div>
      {/* <div className="flex relative flex-1 flex-col space-y-12 px-5  pt-10 h-5/6">
        <p className="text-xl">
          " I’m a software developer that is{" "}
          <span className="text-[#6B29BF] font-semibold">Passionate</span> in
          making things possible. "{" "}
        </p>
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

        <p className="text-lg">
          I'm passionate and dedicated to my work as Web Developer since 2022.{" "}
        </p>

        <div className="bg-[#1C1A2F]  flex items-center px-5 py-3 border-l-8 rounded-r-xl">
          <Image src={quote} />
          <p className="text-xl">
            I can do all things through Christ which strengtheneth me.
          </p>
        </div>
      </div> */}
      <Image
        src={Background}
        className="absolute -bottom-20 -right-36"
        width={250}
      />
    </div>
  );
};

export default About;
