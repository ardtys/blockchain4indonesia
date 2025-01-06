import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VANTA from "vanta";
import * as THREE from "three";

export const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      import("vanta/dist/vanta.rings.min.js").then((module) => {
        if (!vantaEffect) {
          setVantaEffect(
            module.default({
              el: vantaRef.current,
              THREE,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: window.innerHeight, // Set minimum height to viewport height
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
            })
          );
        }
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={vantaRef}
      className="w-screen min-h-screen flex justify-center items-center bg-bgDark1 relative hero-bg-gradient"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};