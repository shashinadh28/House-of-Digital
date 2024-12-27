import Image from "next/image";
import Navbar from "../components/navbar";
import BlurFade from "@/components/ui/blur-fade";
import Footer from "../components/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "400", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function ContactUs() {
  return (
    <main className={`${poppins.className} relative `}>
      <div>
        <Navbar />
        {/* Hero Section */}
        <section className="relative z-10 mx-10 md:mx-[20vh] my-20">
          <BlurFade inView>
            <div
              className="w-full my-10 flex flex-col items-start justify-start bg-cover bg-center"
              style={{ backgroundImage: "url('/images/contact-hero-bg.jpg')" }}
            >
              <h1 className="text-5xl font-bold text-primary-clr mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-primary-clr text-start max-w-2xl">
                Reach out to us for any questions, support, or collaboration
                opportunities.
              </p>
            </div>
          </BlurFade>
        </section>
        {/* Contact Form */}
        <section className="py-16">
          <div className="mx-10 md:mx-[20vh]">
            <BlurFade inView>
              <div className="text-start mb-8">
                <h2 className="text-4xl font-semibold text-primary-clr">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-700">
                  We&apos;re here to help. Fill out the form below and our team
                  will get back to you shortly.
                </p>
              </div>
            </BlurFade>
            <BlurFade inView>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-clr"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-clr"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-clr"
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-primary-clr"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-primary-clr text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark"
                >
                  Send Message
                </button>
              </form>
            </BlurFade>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mx-10 md:mx-[20vh] mt-16 text-gray-800 mb-[30vh]">
          <BlurFade inView>
            <div className="flex flex-col md:flex-row md:space-x-16">
              {/* Contact Details */}
              <div className="flex-1 space-y-8">
                <div className="text-3xl font-semibold text-primary-clr mb-4">
                  Get in Touch
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-semibold">Email Us At:</span>
                    <p className="text-lg">houseofdigitalgrowth@support.com</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-semibold">Call Us:</span>
                    <p className="text-lg">+91 970 151 0491</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl font-semibold">Visit Us:</span>
                    <p className="text-lg">
                      123, Jubilee Hills, <br />
                      Hyderabad, India <br />
                      500042
                    </p>
                  </div>
                </div>
                {/* Social Media Links */}
                <div className="flex space-x-6 mt-8">
                  <a
                    href="#"
                    className="text-primary-clr hover:text-primary-dark"
                  >
                    <i className="fab fa-facebook fa-2x"></i>
                  </a>
                  <a
                    href="#"
                    className="text-primary-clr hover:text-primary-dark"
                  >
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                  <a
                    href="#"
                    className="text-primary-clr hover:text-primary-dark"
                  >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a
                    href="#"
                    className="text-primary-clr hover:text-primary-dark"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                  </a>
                </div>
              </div>
              {/* Map Embed */}
              {/* <div className="flex-1 mt-12 md:mt-0">
                <iframe
                  src="https://maps.google.com/maps?hl=en&amp;q=123%20Jubilee%20Hills,%20Hyderabad,%20India&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  className="rounded-xl w-full h-72 md:h-full"
                ></iframe>
              </div> */}
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
