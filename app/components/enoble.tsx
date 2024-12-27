"use client";
import { motion } from "framer-motion";
import { Rammetto_One } from "next/font/google";
import Image from "next/image";

const rammettoOne = Rammetto_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Enoble() {
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
    <div className="relative my-10 md:my-20 w-screen">
      <div className="flex flex-row justify-center place-items-center w-full">
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
          className="md:text-4xl lg:text-7xl text-xl text-center md:line-space"
        >
          We{" "}
          <span
            className={`text-primary-clr text-2xl md:text-5xl lg:text-6xl ${rammettoOne.className}`}
          >
            en
          </span>
          <span
            className={`text-secondary-clr uppercase text-2xl md:text-5xl lg:text-6xl  ${rammettoOne.className}`}
          >
            able
          </span>
          <br />
          you to{" "}
          <span
            className={`text-primary-clr text-2xl md:text-5xl lg:text-6xl  ${rammettoOne.className}`}
          >
            en
          </span>
          <span
            className={`text-secondary-clr uppercase text-2xl md:text-5xl lg:text-6xl  ${rammettoOne.className}`}
          >
            noble
          </span>
          <br />
          your business!!
        </motion.div>

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
              src={"/images/illus-8.png"}
              alt={"enoble"}
              width={500}
              height={500}
              className="w-44 md:w-fit transform scale-x-[-1]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
