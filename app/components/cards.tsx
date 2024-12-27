import React, { useRef, useEffect, useState, forwardRef } from "react";
import styles from "../style.module.scss";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: React.ReactElement;
  src: string;
  link: string;
  targetScale: number;
  textclr: string;
  borderclr: string;
  cardcolor: string;
  words: string[];
  i: number;
  range: number[];
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { i, title, description, src, textclr, borderclr, cardcolor, words },
    ref
  ) => {
    const container = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        {
          root: null, // viewport as root
          rootMargin: "0px",
          threshold: 0.5, // trigger when 50% of the card is in view
        }
      );

      if (container.current) {
        observer.observe(container.current);
      }

      return () => {
        if (container.current) {
          observer.unobserve(container.current);
        }
      };
    }, []);

    useEffect(() => {
      if (videoRef.current) {
        if (isInView) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }, [isInView]);

    return (
      <div ref={ref} className={styles.cardContainer}>
        <motion.div
          style={{
            top: `calc(-5vh + ${i * 25}px)`,
          }}
          className=""
        >
          <div className="hidden lg:block">
            <div
              className="absolute right-0 z-10 flex flex-col items-end space-y-4 p-4"
              style={{ marginTop: `${i * 250}px` }}
            >
              {words.map((word, index) => (
                <div key={index} className="text-xl md:text-2xl lg:text-2xl py-5">
                  <span className="text-primary-clr">{word.charAt(0)}</span>
                  {word.slice(1)}
                </div>
              ))}
            </div>
          </div>
          <div
            className={` ${cardcolor} rounded-2xl p-5 md:p-16 md:w-3/4 w-11/12 backdrop-blur-sm shadowcard `}
          >
            <div
              className={`grid md:grid-flow-col justify-between md:gap-32 gap-10 text-${textclr} place-items-start`}
            >
              <div
                className={`backdrop-blur-lg bg-white/5 rounded-xl p-5 min-h-[40vh] h-fit ${borderclr} border-4`}
              >
                <div className="flex flex-col gap-5 md:gap-10 place-items-start">
                  <div className="uppercase text-2xl md:text-5xl">{title}</div>
                  <div className="font-light text-sm md:text-xl text-start">
                    {description}
                  </div>
                </div>
              </div>
              <div>
                <video
                  ref={videoRef}
                  src={`/videos/${src}`}
                  height={1200}
                  width={1200}
                  autoPlay
                  muted
                  loop
                  className="rounded-2xl w-5/6 min-h-[40vh] md:min-h-[60vh] object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
);
Card.displayName = "Card";
export default Card;
