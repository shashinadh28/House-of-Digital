"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { FaPhone } from "react-icons/fa6";

const poppins = Poppins({
  weight: ["200", "400", "600", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function FormCard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [projectSummary, setProjectSummary] = useState("");
  const [help, setHelp] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "", phone: "" });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {

    const validationErrors = { name: "", email: "", message: "", phone: "", help: "" };

    if (!name) validationErrors.name = "Name is required";
    if (!email || !validateEmail(email))
      validationErrors.email = "Valid email is required";
    if (!phone) validationErrors.phone = "Phone number is required";
    if (!message) validationErrors.message = "Message is required";
    if (!help) validationErrors.help = "Please select an option";


    setErrors(validationErrors);

    if (
      !validationErrors.name &&
      !validationErrors.email &&
      !validationErrors.message
    ) {
      // Submit form logic here
      alert("Form submitted successfully!");
      setMessage("");
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-screen flex flex-row justify-center md:my-20 my-20 ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="rounded-xl p-5 w-5/6 md:w-4/6"
      >
        <div className="flex flex-col md:flex-row justify-between place-items-start gap-10 ">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative md:w-4/6 md:h-[55vh]"
          >
            <div className="absolute inset-0  rounded-2xl backdrop-blur-sm h-5/6"></div>
            <div className={`relative p-4 ${[poppins.className]} flex flex-col gap-3`}>
              <div className="text-3xl md:text-5xl lg:text-7xl text-primary-clr font-bold">
                Build the Future with Us Today...
              </div>
              <div>
                <p className="text-gray-500 md:mt-10">
                  We would love to hear from you. Please feel free to reach out to us with any questions or feedback. We will get back to you as soon as possible. Thank you!
                </p>
              </div>
              <div className="rounded-full bg-primary-clr w-fit px-10 py-4">
                <div className="flex flex-row gap-5 text-white place-items-center">
                  <FaPhone />
                  <p>9701510491</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="relative rounded-2xl p-4 bg-white bg-opacity-50 backdrop-blur-lg h-fit w-[50vh]"
          >
            <div className="flex flex-col gap-5 mt-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="rounded-lg p-2 md:w-96 bg-white bg-opacity-50 backdrop-blur border border-gray-300 focus:ring-2 focus:ring-primary-clr focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="rounded-lg p-2 md:w-96 bg-white bg-opacity-50 backdrop-blur border border-gray-300 focus:ring-2 focus:ring-primary-clr focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="rounded-lg p-2 md:w-96 bg-white bg-opacity-50 backdrop-blur border border-gray-300 focus:ring-2 focus:ring-primary-clr focus:outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="rounded-lg p-2 md:w-96 bg-white bg-opacity-50 backdrop-blur border border-gray-300 focus:ring-2 focus:ring-primary-clr focus:outline-none"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Website"
                  className="rounded-lg p-2 md:w-96 bg-white bg-opacity-50 backdrop-blur border border-gray-300 focus:ring-2 focus:ring-primary-clr focus:outline-none"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <textarea
                  placeholder="Project Summary"
                  className="rounded-lg p-2 md:w-96 h-40 bg-white bg-opacity-50 backdrop-blur border border-gray-300 focus:ring-2 focus:ring-primary-clr focus:outline-none"
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                />
              </div>

              <div className="flex flex-col w-4/6">
                <p className="text-gray-700">What Can We Help You With?</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {["Website", "SEO", "Branding", "Social Media", "Digital Marketing", "Photography", "Videography", "Printing", "Content Management", "Other"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="help"
                        value={option}
                        className="form-radio text-primary-clr"
                        onChange={(e) => setHelp(e.target.value)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-clr text-white rounded-lg p-2 md:w-96 shadow-lg mt-4 focus:outline-none focus:ring-2 focus:ring-primary-clr"
                onClick={handleSubmit}
              >
                Submit
              </motion.button>
            </div>

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
