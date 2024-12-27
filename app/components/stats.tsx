"use client"
import Image from "next/image";
import { Rammetto_One } from "next/font/google";
import { motion } from "framer-motion";

const rammettoOne = Rammetto_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Stats() {
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
      <div className="flex flex-col md:flex-row justify-center">
        <div className="bg-primary-clr rounded-3xl mx-10 my-10 md:w-4/6">
          <div className="flex flex-col md:flex-row p-6 md:p-16 justify-between">
            <div className="flex flex-col text-white gap-16 md:w-1/2 justify-evenly">
              <div className="text-xl md:text-3xl">
                <span className={`${rammettoOne.className}`}>LOUD SPEAK</span>{" "}
                your Brand through House of Digital Growth
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-10 place-items-center">
                  <div className="text-5xl md:text-8xl">85 %</div>
                  <div className="font-normal">
                    Client <br /> Satisfaction
                  </div>
                </div>
                <div className="h-[1px] w-3/4 bg-white rounded-full"></div>
                <div className="flex flex-row gap-10 place-items-center">
                  <div className="text-5xl md:text-8xl">20 +</div>
                  <div className="font-normal">
                    Global <br /> Partners
                  </div>
                </div>
                <div className="h-[1px] w-3/4 bg-white rounded-full"></div>
                <div className="flex flex-row gap-10 place-items-center">
                  <div className="text-5xl md:text-8xl">99 %</div>
                  <div className="font-normal">
                    Project <br /> Submissions
                  </div>
                </div>
                {/* <div className="h-[1px] w-3/4 bg-white rounded-full"></div> */}
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={"stats"}
                width={1000}
                height={1000}
                className="rounded-3xl w-[60vh] h-[80vh] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <motion.div
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
        className="absolute bottom-[10vh] w-screen flex flex-row justify-end"
      >
        <Image
          src={"/images/illus-2.png"}
          alt={""}
          height={450}
          width={450}
          className="w-28 md:w-fit transform scale-x-[-1] right-0"
        />
      </motion.div>
    </div>
  );
}
