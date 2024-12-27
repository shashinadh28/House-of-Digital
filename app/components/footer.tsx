import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { LuPhone } from "react-icons/lu";

const poppins = Poppins({
  weight: ["200", "400", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer
      id="footer"
      className={`bg-primary-clr text-white ${poppins.className} md:py-20 py-10`}
    >
      <div className="flex flex-col md:flex-row justify-center place-items-center gap-20">
        <div className="flex flex-col gap-4 md:gap-10">
          <Image
            src="/images/hodg-logo-name.png"
            alt="House of Digital Growth Logo"
            width={1500}
            height={1500}
            className="w-[40vh] md:w-[50vh] "
          />
          <div className="hidden md:block">
            <div className="flex flex-row gap-2 ">
              <div className="bg-white rounded-full p-4">
                <FaFacebookF className="text-primary-clr md:size-6" />
              </div>
              <div className="bg-white rounded-full p-4 mx-4">
                <FaTwitter className="text-primary-clr md:size-6" />
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex flex-col md:mt-5 gap-4">
              <div className="flex flex-row gap-5">
                <Link href="/terms" className="text-xl">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-xl">
                  Privacy Policy
                </Link>
              </div>
              <div className="">
                © 2024 House of Digital Growth. All rights reserved.
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-2 md:justify-start justify-center place-items-center">
          <div className="font-bold text-4xl">
            We will make it happen.
          </div>
          <div className="max-w-lg text-center">
            A Team of experts in technology, marketing, and business development!
          </div>

          <div className="mt-8">
            <div className="flex flex-row gap-2">
              <div>
                <LuPhone className="text-white size-6" />
              </div>
              <div className="text-xl">+91 970 151 0491</div>
            </div>
          </div>

          <div className="bg-white rounded-full px-8 py-4 w-fit text-primary-clr font-semibold text-lg mt-5">
            <div>Lets Talk ↗</div>
          </div>
        </div>

        <div className=" flex flex-col gap-5">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl mb-4 font-semibold">Quick Links</h3>
            <div className="flex flex-row gap-3">
              <Link href="/">Home</Link>
              <Link href="/#services">Services</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/contact-us">Contact Us</Link>
            </div>
          </div>

          <div>
            {/* Office Location */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl mb-4 font-semibold">Our Office</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4356243961684!2d78.4090220478264!3d17.4388518588143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb913bc978e32d%3A0x17a29e2970ff3682!2s500034%2C%20Rd%20Number%2010C%2C%20MP%20and%20MLAs%20Colony%2C%20Gayatri%20Hills%2C%20Jubilee%20Hills%2C%20Hyderabad%2C%20Telangana%20500033!5e0!3m2!1sen!2sin!4v1731204243490!5m2!1sen!2sin"
                width="600"
                height="450"
                loading="lazy"
                className="w-56 h-40 rounded-lg mb-4"
              ></iframe>
              {/* <iframe
            src="https://maps.google.com/maps?hl=en&amp;q=Gayathri%20Hills,%20Jubleehills%20-%20500034&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe> */}
              <address className="text-xs font-medium text-center md:text-left">
                #1087, Rd no 10C, Gayathri Hills, <br />
                Jubleehills - 500034 <br /> India
              </address>
            </div>
          </div>
        </div>

        <div className="md:hidden block">
          <div className="flex flex-col mt-5 gap-4">
            <div className="flex flex-row gap-5">
              <Link href="/terms" className="text-xl">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-xl">
                Privacy Policy
              </Link>
            </div>
            <div className="">
              © 2024 House of Digital Growth. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
