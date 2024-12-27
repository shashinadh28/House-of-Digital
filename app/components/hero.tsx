"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  // // Animation variants for different elements
  // const imageVariants = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     transition: {
  //       duration: 1.2,
  //       ease: [0.25, 0.1, 0.25, 1], // Custom easing
  //     },
  //   },
  // };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 2.5, // Delay start until after preloader
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const emphasizedTextVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const videoVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.2, // Delay after text animations
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-2, 20, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-screen overflow-hidden">
      <motion.div
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="absolute w-screen h-96"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex flex-row justify-end w-full">
            <motion.div
              initial={{ rotate: -10, x: 100 }}
              animate={{ rotate: 0, x: 0 }}
              transition={{ delay: 2.2, duration: 1.5, ease: "easeOut" }}
              className="mr-[-2vh] md:mr-[-10vh] lg:mr-[-20vh]"
            >
              <Image
                src={"/images/illus-3.png"}
                alt={"Oval"}
                width={500}
                height={500}
                className="w-28 md:w-2/12 lg:w-10/12 "
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute h-full flex flex-col justify-center md:top-[-15vh] lg:top-[-55vh]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.3, duration: 1.5, ease: "easeOut" }}
      >
        <motion.div
          initial={{ rotate: 10, x: -100 }}
          animate={{ rotate: 0, x: 0 }}
          transition={{ delay: 2.5, duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={"/images/illus-4.png"}
            alt={""}
            width={4500}
            height={4500}
            className="w-20 md:w-3/12 lg:w-4/12 transform scale-x-[-1]"
            priority
          />
        </motion.div>
      </motion.div>

      <div className="flex flex-col justify-center place-items-center w-screen">
        <motion.div
          className="text-4xl md:text-6xl lg:text-8xl font-light text-center w-10/12 md:w-2/4 md:my-32 my-16"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={textVariants}>We not only </motion.span>
          <motion.span
            className="text-primary-clr text-6xl md:text-7xl lg:text-9xl font-bold block"
            variants={emphasizedTextVariants}
          >
            CREATE
          </motion.span>
          <motion.span variants={textVariants}>but also</motion.span>
          <motion.span
            className="text-secondary-clr text-6xl md:text-7xl lg:text-9xl font-bold block"
            variants={emphasizedTextVariants}
          >
            CURATE
          </motion.span>
        </motion.div>

        <motion.div
          className="rounded-lg md:px-20 px-4 w-full"
          variants={videoVariants}
          initial="hidden"
          animate="visible"
        >
          <video
            className="rounded-3xl w-full"
            src="/videos/hero-vid.mp4"
            autoPlay={true}
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/video-placeholder.jpg"
            
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </div>
  );
}
