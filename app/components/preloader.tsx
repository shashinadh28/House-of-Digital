"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import MainLoader from "../components/preloader/index";
import LocomotiveScroll from "locomotive-scroll";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll();

      document.body.style.overflow = "hidden";

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "unset";
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();

    // Cleanup function
    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MainLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
