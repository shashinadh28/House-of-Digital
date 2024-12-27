import Image from "next/image";
import Navbar from "../components/navbar";
import BlurFade from "@/components/ui/blur-fade";
import Footer from "../components/footer";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  weight: ["200", "400", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Placeholder images for different sections (you can replace them as needed)
// const teamImages = Array.from(
//   { length: 4 },
//   (_, i) => `https://picsum.photos/200/200?random=${i + 1}`
// );

const values = [
  "Best Quality",
  "Innovation",
  "Commitment",
]
const highlightIcons = [
  "/icons/award.png",
  "/icons/growth.png",
  "/icons/stars.png",
];

export default function AboutUs() {
  return (
    <main className={`${poppins.className}  relative w-screen`}>
      <div>
        <Navbar />
        <section className="relative z-10 text-gray-800 mb-44">
          {/* Hero Section */}
          <BlurFade inView>
            <div
              className=" my-10 flex flex-col items-start justify-start bg-cover bg-center"
              style={{ backgroundImage: "url('/images/hero-bg.png')" }}
            >
              <h1 className="text-5xl font-bold text-primary-clr mb-10 mx-[10vh]">
                About Us
              </h1>
              <div className="flex flex-col md:flex-row gap-10 mx-[10vh]">
                <p className="text-xl text-primary-clr text-justify">
                  <span className="font-bold">The House of Digital Growth</span>{" "}
                  offers comprehensive digital services. We are a multitudinous
                  digital services to all kinds&apos; of customers seeking
                  panoramic online presence of their products. We are a single
                  window for all your digital marketing solutions including
                  Production, Content Management, Ad making, Web Development and
                  Branding.
                </p>
                <div className=" rounded-2xl bg-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About Us"
                    width={1400}
                    height={1400}
                    className="rounded-2xl"
                  />
                </div>
              </div>

              <div className="flex gap-10 mx-[10vh] md:flex-row-reverse flex-col">
                <p className="text-xl text-primary-clr text-justify max-w-5xl mt-10">
                  <span className="font-bold">The House of Digital Growth</span>{" "}
                  accommodates dedicated and passionate team with required
                  expertise. We strongly believe that the success of any business
                  depends on the Return on Investment. Therefore, we understand
                  our client&apos;s requirements and constraints, and accordingly
                  customize tuning to the defined client needs.
                </p>

                <div className=" rounded-2xl bg-gray-100">
                  <Image
                    src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About Us"
                    width={1400}
                    height={1400}
                    className="rounded-2xl"
                  />
                </div>
              </div>

            </div>
          </BlurFade>
          {/* Mission and Vision */}
          <BlurFade inView>
            <div className="mx-[10vw] my-16">
              <h2 className="text-4xl font-semibold text-primary-clr mb-8">
                Our Mission & Vision
              </h2>
              <p className="text-lg mb-4 text-primary-clr">
                <span className="font-semibold uppercase">Our mission</span> is
                to blend the client business with our bewitching digital
                marketing products and thus enrich the client&apos;s product
                branding that is result oriented enough to enhance our customer
                revenue.
              </p>
              <p className="text-lg text-primary-clr">
                <span className="font-semibold uppercase">Our vision</span> is
                to be the most trustable digital marketing brand in boosting our
                clients brand
              </p>
            </div>
          </BlurFade>
          {/* Core Values/Highlights Section */}
          <BlurFade inView>
            <div className="mx-[10vw] my-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-44">
              {highlightIcons.map((icon, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <Image
                    src={icon}
                    alt={`Highlight ${idx + 1}`}
                    width={64}
                    height={64}
                    className="mb-4"
                  />
                  <h3 className="text-2xl font-semibold">{values[idx]}</h3>
                  <p className="text-md mt-2">
                    Brief description of core value or highlight, such as
                    innovation, commitment, integrity, etc.
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
          {/* Team Section */}
          {/* <BlurFade inView>
            <div className="mx-[10vw] my-16">
              <h2 className="text-4xl font-semibold text-center text-primary-clr mb-8">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {teamImages.map((imageUrl, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img
                      src={imageUrl}
                      alt={`Team member ${idx + 1}`}
                      className="rounded-full mb-4 w-40 h-40 object-cover"
                    />
                    <h3 className="text-xl font-semibold">
                      Team Member {idx + 1}
                    </h3>
                    <p className="text-md text-gray-600">Position</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          */}

          {/* Closing Statement */}
          <BlurFade inView>
            <div className="mx-[10vw] my-16 text-">
              <h2 className="text-4xl font-semibold text-primary-clr mb-8">
                Join Us on Our Journey
              </h2>
              <p className="text-lg">
                We invite you to explore our portfolio and learn more about how
                our solutions can empower your business. Together, we can build
                a more connected, efficient, and exciting future.
              </p>
              <Link
                href="/contact-us"
              >
                <button className="mt-8 px-6 py-3 bg-primary-clr text-white font-semibold rounded-lg hover:bg-primary-dark">
                  Contact Us
                </button>
              </Link>
            </div>
          </BlurFade>
        </section>
        <Footer />
      </div>
      {/* Background Image */}
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
