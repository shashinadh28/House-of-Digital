"use client";
import Image from "next/image";
import CardSection from "./cards-main";
import { motion } from "framer-motion";

export default function Services() {
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
    <div className="relative w-screen">
      <div className="flex flex-col place-items-center">
        <div className="mb-20 flex flex-row md:justify-evenly place-items-center">
          <div className="w-32 md:w-0"></div>
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeIn" }}
            >
              <Image
                src={"/images/illus-5.png"}
                alt={""}
                height={600}
                width={600}
                className="w-10/12 md:w-fit"
              />
            </motion.div>
          </motion.div>

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
            className="text-center text-2xl md:text-5xl lg:text-6xl"
          >
            Our Services to
            <br />
            <span className="text-primary-clr">Elevate</span>
            <span className="text-secondary-clr">Your Brand</span>
          </motion.div>

          <div className="w-32 md:w-0"></div>
        </div>
        <center className="md:mb-32 relative">

          <CardSection />
        </center>
      </div>
    </div>
  );
}
