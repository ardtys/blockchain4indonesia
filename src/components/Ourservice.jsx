import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";

export const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      className="w-screen min-h-screen flex justify-center items-center bg-bgDark2 relative hero-bg-gradient"
      id="service"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center py-20 md:py-24 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base mb-6 font-bold">
            Enhance your business potential with Blockchain Technology.
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-primaryText px-8 sm:px-8 md:px-20 lg:px-4">
            <h1 className="inline md:hidden">Solutions</h1>
            <h1 className="hidden md:inline">Solutions</h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48">
            Many people think that blockchain is just about coin creation and trading, without realizing its true potential. In the past 2 years we have been proving them wrong by designing and developing Blockchain-based functional solutions to multiple Private Companies, BUMNs and Ministries in Indonesia.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};