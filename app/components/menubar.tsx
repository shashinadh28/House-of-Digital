"use client";
import { useEffect, useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import { BsBarChartFill } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { motion } from "framer-motion";

export default function MenuBar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const sections = ["hero", "services", "stats", "whyus"];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });

    const footer = document.getElementById("footer");
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsFooterVisible(entry.isIntersecting);
      });
    });

    if (footer) footerObserver.observe(footer);

    return () => {
      sectionObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const handleScrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId); // Update active section on click
    }
  };

  if (isFooterVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-screen flex flex-row justify-center items-center px-4 sm:px-6 md:px-8">
      <div className="rounded-full py-4 my-20 w-full sm:w-10/12 md:w-8/12 lg:w-5/12 border-4 border-white mb-6 sm:mb-10 bg-gradient shadow-xl">
        <div className="flex flex-row justify-around items-center h-full">
          <div
            className={`${activeSection === "home" ? "bg-primary-clr" : "bg-transparent"
              } py-2 sm:py-2 px-2 sm:px-5 rounded-full`}
            onClick={() => handleScrollTo("home")}
          >
            <a
              className={`${activeSection === "home" ? "text-white" : "text-white"
                } text-lg sm:text-xl cursor-pointer`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
                <GoHomeFill className="text-lg sm:text-xl" />
                <span className="hidden sm:block">Home</span>
              </div>
            </a>
          </div>
          <div
            className={`${activeSection === "services"
              ? "bg-primary-clr text-white"
              : "bg-transparent text-white"
              }  text-lg sm:text-xl cursor-pointer py-2 sm:py-2 px-2 sm:px-5 rounded-full`}
            onClick={() => handleScrollTo("services")}
          >
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
              <IoSettings className=" text-lg sm:text-xl" />
              <span className="hidden sm:block">Services</span>
            </div>
          </div>
          <div
            className={`${activeSection === "stats"
              ? "bg-primary-clr text-white"
              : "bg-transparent text-white"
              }  text-lg sm:text-xl cursor-pointer py-2 sm:py-2 px-2 sm:px-5 rounded-full`}
            onClick={() => handleScrollTo("stats")}
          >
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
              <BsBarChartFill className=" text-lg sm:text-xl" />
              <span className="hidden sm:block">Stats</span>
            </div>
          </div>
          <div
            className={`${activeSection === "whyus"
              ? "bg-primary-clr text-white"
              : "bg-transparent text-white"
              }  text-lg sm:text-xl cursor-pointer py-2 sm:py-2 px-2 sm:px-5 rounded-full`}
            onClick={() => handleScrollTo("whyus")}
          >
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
              <AiFillQuestionCircle className=" text-lg sm:text-xl" />
              <span className="hidden sm:block">Why Us</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}