"use client";
import styles from "../style.module.scss";
import { services } from "./data";
import Card from "./cards";
import { useRef } from "react";
import { useState } from "react";


const words = [
  "Extraordinarily",
  "Client",
  "Centric",
  "Enabled",
  "Navigation",
  "Target",
  "Reaching",
  "Innumerable",
  "Customers",
];

// Function to split words into chunks of 3
const chunkWords = (words: string[], size: number) => {
  const chunks = [];
  for (let i = 0; i < words.length; i += size) {
    chunks.push(words.slice(i, i + size));
  }
  return chunks;
};

const wordChunks = chunkWords(words, 3);


export default function CardSection() {
  const container = useRef<HTMLDivElement>(null);
  const [tabBtn, setTabBtn] = useState(0);

  const handleScroll = (scrollOffset: number) => {
    window.scrollTo({
      top: window.scrollY + scrollOffset,
      behavior: 'smooth',
    });
  };

  return (
    <div className="">
      <main ref={container} className={`${styles.main} relative`}>
        <div className="absolute -top-[10vh] w-screen">
          <div className="flex flex-row justify-center mb-5">
            <div className="px-2 py-2 bg-black/5 rounded-full">
              <div className="flex flex-row gap-5 place-items-center">
                <div
                  className={`${tabBtn == 0 ? 'bg-primary-clr text-white' : 'bg-transparent'} rounded-full px-5 py-3`}
                  onClick={() => {
                    setTabBtn(0);
                    handleScroll(200);
                  }
                  }>
                  Branding
                </div>
                <div className={`${tabBtn == 1 ? 'bg-primary-clr text-white' : 'bg-transparent'}  rounded-full px-5 py-3`}
                  onClick={
                    () => {
                      setTabBtn(1);
                      handleScroll(1000);
                    }
                  }>
                  Marketing
                </div>
                <div className={`${tabBtn == 2 ? 'bg-primary-clr text-white' : 'bg-transparent'}  rounded-full px-5 py-3`}
                  onClick={
                    () => {
                      setTabBtn(2);
                      handleScroll(1800);
                    }
                  }
                >
                  Web Design
                </div>
                <div className={`${tabBtn == 3 ? 'bg-primary-clr text-white' : 'bg-transparent'}  rounded-full px-5 py-3`}
                  onClick={
                    () => {
                      setTabBtn(3);
                      handleScroll(2500);
                    }
                  }
                >
                  App Development
                </div>
                <div className={`${tabBtn == 4 ? 'bg-primary-clr text-white' : 'bg-transparent'}  rounded-full px-5 py-3`}
                  onClick={
                    () => {
                      setTabBtn(4);
                      handleScroll(3300);
                    }
                  }
                >
                  Ad Making
                </div>
                <div className={`${tabBtn == 5 ? 'bg-primary-clr text-white' : 'bg-transparent'}  rounded-full px-5 py-3`}
                  onClick={
                    () => {
                      setTabBtn(5);
                      handleScroll(4000);
                    }
                  }
                >
                  Content Management
                </div>
              </div>
            </div>
          </div>
        </div>
        {services.map((service, i) => {
          const targetScale = 1 - (services.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...service}
              words={wordChunks[i] || []}
              // progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </div>
  );
}
