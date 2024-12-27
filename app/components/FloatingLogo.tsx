// components/FloatingLogo.jsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const FloatingLogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get footer element
      const footer = document.querySelector("#footer");

      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const scrollPosition = window.scrollY;

        // Show logo after scrolling 100px AND before footer is in view
        const isBeforeFooter = footerRect.top > window.innerHeight;
        const hasScrolledPastTop = scrollPosition > 100;
        setIsVisible(hasScrolledPastTop && isBeforeFooter);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden lg:block">
      <div
        className={`fixed left-3 md:left-20 md:mt-20 z-50 transition-all duration-300 ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
          }`}
        style={{ top: "2rem" }}
      >
        <div>
          <Image
            src="/icons/hodg-logo.svg"
            alt="Floating Logo"
            width={150}
            height={150}
            className="transition-all duration-300 "
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingLogo;
