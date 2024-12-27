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

export default function Trumphet() {
  const floatingAnimation = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const sentence = [
    { text: "We ", isHighlighted: false },
    { text: "Trumpet", isHighlighted: true },
    { text: " to make your brand ", isHighlighted: false },
    { text: "Triumphant", isHighlighted: true },
  ];

  return (
    <div className="relative my-28 md:mt-64 md:mx-52">
      <div className="flex flex-row justify-center place-items-center px-20 ">
        {/* Animated text section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:text-4xl lg:text-7xl text-xl text-center md:line-space"
        >
          {sentence.map((word, index) =>
            word.text.split("").map((char, charIndex) => (
              <motion.span
                key={`${index}-${charIndex}`}
                custom={charIndex}
                variants={letterVariants}
                initial="hidden"
                whileInView="visible"
                className={`  ${char === " " ? "mr-2" : ""} ${
                  word.isHighlighted
                    ? `text-primary-clr ${rammettoOne.className}`
                    : "text-black "
                }`}
              >
                {char}
              </motion.span>
            ))
          )}
        </motion.div>

        {/* Floating trumpet image */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src={"/images/trumphet.png"}
              alt={"enoble"}
              width={500}
              height={500}
              className="w-44 md:w-[46vh]  hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
