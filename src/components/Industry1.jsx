import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VANTA from "vanta";
import * as THREE from "three";
import { InvitationModal } from "./InvitationModal";

export const Industrys = () => {
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
              minHeight: window.innerHeight, 
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
            Leverage any business potential with Blockchain Solutions.
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-primaryText px-8 sm:px-8 md:px-20 lg:px-4">
            <h1 className="inline md:hidden">Case Study</h1>
            <h1 className="hidden md:inline">Case Study</h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48">
            We strive to keep innovating and bring positive impact to the industry. Our solutions aim to bring competitive advantage to your company.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};