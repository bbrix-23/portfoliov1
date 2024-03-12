import React, { useEffect } from "react";
import { data } from "./data";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useMode } from "@/app/context/theme";

const squareVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, type: "spring", delay: 0.3 },
  },
  hidden: { opacity: 0, x: -100 },
};

const ProjectMobile = () => {
  const controlsArray = data.map(() => useAnimation()); // Create an array of animation controls
  const [titleRef, inViewTitle] = useInView({
    threshold: 0.5,
  });
  const { isDark } = useMode();

  useEffect(() => {
    if (inViewTitle) {
      controlsArray.forEach((controls) => {
        controls.start("visible");
      });
    }
  }, [controlsArray, inViewTitle]);

  return (
    <div className="h-auto p-4 mt-20 space-y-7 overflow-hidden">
      <div className="heading">
        <h1 className="text-3xl font-bold text-gray-300">Projects</h1>
      </div>
      <div className="flex flex-col space-y-20">
        {data?.map(({ id, title, body, stack, side, img, preview }, index) => {
          const [ref, inView] = useInView({
            threshold: 0.5, // Adjust the threshold as needed
          });

          if (inView) {
            controlsArray[index].start("visible");
          }

          return (
            <motion.div
              variants={squareVariants}
              initial="hidden"
              animate={controlsArray[index]}
              ref={ref}
              key={id}
              className="space-y-3"
            >
              <motion.span
                variants={squareVariants}
                initial="hidden"
                animate={controlsArray[index]}
                ref={ref}
              >
                <p className="text-2xl font-semibold">{title}</p>
                <p>{side}</p>
              </motion.span>
              <p className="text-gray-500">{body}</p>
              <p className="mt-4 text-gray-500">Tools:</p>
              <ul className="list-disc ml-10">
                {stack?.map((i, index) => {
                  return <li key={index}>{i}</li>;
                })}
              </ul>
              <Image src={img} />

              {preview && <button className="underline">Preview</button>}
              <div
                className={`flex ${
                  index % 2 === 0 ? "justify-end pr-5" : "justify-start pl-2"
                }`}
              >
                <span className="h-0.5 w-1/2 bg-gray-200"></span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMobile;
