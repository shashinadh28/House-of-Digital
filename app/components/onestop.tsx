"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OneStop() {
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-screen my-28 md:my-52">
      <div className="flex flex-row justify-center place-items-center line-height gap-4 lg:gap-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          className="text-center text-1xl md:text-7xl"
        >
          Your{" "}
          <span className="text-primary-clr text-2xl md:text-7xl">
            One-Stop <br />
          </span>{" "}
          <span className="text-secondary-clr text-2xl md:text-7xl">
            Solution
          </span>{" "}
          <br /> for <br /> Digital Excellence
        </motion.div>

        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
        >
          <Image
            src={"/images/illus-8.png"}
            alt={""}
            height={400}
            width={400}
            className=" w-32 md:w-[40vh] transform scale-x-[-1]"
          />
        </motion.div>
      </div>
    </div>
  );
}
