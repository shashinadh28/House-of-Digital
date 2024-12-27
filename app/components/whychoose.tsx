import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

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

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const section = sectionRef.current;

    // Main content animation
    gsap.fromTo(
      ".content-block",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top center+=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen  pt-20 my-20 md:mb-20 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main content block */}
        <div className="content-block mb-20 text-center">
          <div className="flex flex-row justify-center md:gap-10">
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="w-auto"
            >
              <Image
                src={"/images/illus-6.png"}
                alt={"Floating Illustration"}
                width={300}
                height={300}
                className="w-32 md:w-fit"
              />
            </motion.div>

            <motion.div
              variants={scaleInVariants}
              className="flex flex-row justify-start place-items-center text-xl md:text-5xl font-bold uppercase"
            >
              Why
              <span className="text-primary-clr text-3xl md:text-7xl">
                {" "}
                Choose{" "}
              </span>
              Us?
            </motion.div>
          </div>
          <p className="text-primary-clr md:text-3xl max-w-3xl mx-auto">
            We are a trustworthy and specialized all-in-one Digital service
            provider. Our platform helps you reach
          </p>

          <div className=" ml-[11vh] md:ml-[18vh]">
            <SpecialWords />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

const SpecialWords = () => {
  const words = [
    { word: "Superabundant", delay: 0 },
    { word: "Protractible", delay: 0.5 },
    { word: "Executed", delay: 1 },
    { word: "Create", delay: 1.5 },
    { word: "Inquisitive", delay: 2 },
    { word: "Audience", delay: 2.5 },
    { word: "Laurels", delay: 3 },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      className="flex flex-col items-start space-y-6 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {words.map(({ word, delay }) => (
        <motion.div
          key={word}
          variants={wordVariants}
          className="group relative"
          whileHover={{ scale: 1.05 }}
          animate={floatingAnimation}
          custom={delay}
        >
          <div className="text-3xl md:text-5xl tracking-wide text-primary-clr">
            <span className="text-orange-500 font-bold text-4xl md:text-6xl">
              {word[0]}
            </span>
            {word.slice(1)}
          </div>
          <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300 ease-out" />
        </motion.div>
      ))}
    </motion.div>
  );
};
