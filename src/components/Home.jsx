import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-screen min-h-screen">
      <video 
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover z-0"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/background_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section
        className="relative z-10 w-screen min-h-screen flex justify-center items-center bg-black/50"
        id="home"
      >
        <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center py-20 md:py-24 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-secondaryColor text-sm sm:text-base mb-6 font-bold">
              Discover new how to business
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-primaryText px-8 sm:px-8 md:px-20 lg:px-4">
              <h1 className="inline md:hidden">Blockchain</h1>
              <h1 className="hidden md:inline">Blockchain adoption for Indonesia</h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48">
              We are a team of blockchain enthusiasts who are passionate about the potential of blockchain technology to revolutionize the way we do business.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-14"
          >
            <div className="flex flex-col gap-2 sm:flex-row justify-center">
              <button
                className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
                onClick={() => window.location.href="/#contact"}
                aria-label="Get started"
              >
                Get Started
              </button>
              <button
                className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition"
                onClick={() => setIsModalOpen(true)}
                aria-label="Let's Collaborate"
              >
                Let's Collaborate
              </button>
            </div>
          </motion.div>
        </div>

        {isModalOpen && (
          <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        )}
      </section>
    </div>
  );
};