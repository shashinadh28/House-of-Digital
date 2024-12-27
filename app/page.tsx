"use client";
import Image from "next/image";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Enoble from "./components/enoble";
import Stats from "./components/stats";
import WhyChoose from "./components/whychoose";
import OneStop from "./components/onestop";
import FormCard from "./components/formcard";
import Footer from "./components/footer";
import Preloader from "./components/preloader";
import FloatingLogo from "./components/FloatingLogo";
import Trumphet from "./components/trumphet";
import MenuBar from "./components/menubar";

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      <div className="relative z-10">
        <div>
          <div id="home" className="scroll-mt-10">
            <Navbar />
            <FloatingLogo />
            <Hero />
          </div>
          <Trumphet />
          <div id="services">
            <Services />
          </div>
          <Enoble />
          <div id="stats">
            <Stats />
          </div>
          
          <div id="whyus">
            <WhyChoose />
          </div>
          <OneStop />
          <FormCard />
          <div id="footer">
            <Footer />
          </div>
        </div>

        <div className="fixed bottom-0 left-0 z-20">
          <MenuBar />
        </div>

        <div className="fixed bottom-[14vh] md:bottom-8 right-8 z-20">
          <a
            href="https://wa.me/919701510491"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-green-600 p-4 md:p-3 rounded-full">
              <Image
                src="/icons/whatsapp.png"
                alt="whatsapp"
                width={40}
                height={40}
                className=""
              />
            </div>
          </a>
        </div>
      </div>

      <div className="fixed top-0 left-0 -z-10">
        <Image
          src={"/images/bg.png"}
          alt={"bg"}
          height={3000}
          width={3000}
          className="w-screen h-screen"
        />
      </div>
    </main>
  );
}
