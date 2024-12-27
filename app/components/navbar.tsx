"use client";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const handleContact = () => {
    window.location.href = "tel:+919701510491";
  };

  // Navbar entrance animation
  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.8, // Starts slightly before other animations
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Social icons animation variants
  const socialIconsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2.2,
        staggerChildren: 0.1,
      },
    },
  };

  const socialIconVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Logo animation
  const logoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className="md:m-4 md:mt-10 mt-5 flex flex-row lg:justify-center w-screen justify-center"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="bg-primary-clr rounded-full lg:w-[70%] md:w-[85%] w-full mx-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1.9,
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="flex flex-row justify-between px-2 py-3 md:py-6 md:px-8 place-items-center">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href={"/"}>
              <Image
                src="/images/logo-name.png"
                alt="House of Digital Agency"
                width={1500}
                height={1500}
                className="w-11/12 md:w-3/4 lg:w-8/12"
              />
            </Link>
          </motion.div>

          <div className="flex flex-row place-items-center gap-9">
            <motion.div
              className="hidden md:block"
              variants={socialIconsContainer}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-row gap-4 text-white">
                {[
                  { Icon: FaLinkedin, link: "https://www.linkedin.com" },
                  {
                    Icon: FaThreads,
                    link: "https://www.threads.net/@houseofdigitalgrowth",
                  },
                  {
                    Icon: FaFacebook,
                    link: "https://www.facebook.com/profile.php?id=61560947982241",
                  },
                  {
                    Icon: FaInstagram,
                    link: "https://www.instagram.com/houseofdigitalgrowth",
                  },
                ].map(({ Icon, link }, index) => (
                  <motion.div
                    key={index}
                    variants={socialIconVariants}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <Icon className="size-5 cursor-pointer" />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="scale-75 md:scale-100"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: [0.75, 1] }}
              transition={{
                delay: 2.4,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.button
                className="text-primary-clr bg-white rounded-full py-3 px-5 md:text-base text-xs"
                onClick={handleContact}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="flex flex-row gap-3 place-items-center"
                  whileHover={{
                    gap: "16px",
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LuPhone />
                  </motion.div>
                  <div>Contact</div>
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
