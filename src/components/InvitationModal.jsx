import { motion, AnimatePresence } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";

export const InvitationModal = ({ setIsOpen }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, zIndex: 50 }}
      animate={{ opacity: 1, zIndex: 50 }}
      transition={{ duration: 0.1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center"
        onClick={() => setIsOpen(false)}
      >
        <div
          className="w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl sm:mb-8 mx-auto z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex relative">
            <div className="w-1/2 hidden lg:inline">
              <h2 className="mt-6 mb-2 text-5xl font-bold tracking-normal text-primaryText">
                Contact Us
              </h2>
              <h2 className="text-5xl font-bold tracking-normal text-secondaryColor">
                Get in Touch
              </h2>

              <ul className="mb-6 text-primaryText mt-12">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Visit our office</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Send us an email</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Give us a call</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0">
              <div className="flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6">
                <div className="text-white mr-2 text-8xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-3xl">
                  Tailcast
                </div>
              </div>

              <h3 className="mb-7 text-2xl text-primaryText font-bold leading-snug text-center">
                Here's how you can get in touch with us:
              </h3>
              
              <div className="w-full space-y-4">
                <div className="w-full sm:w-4/5 mx-auto">
                  <a
                    href="/location"
                    className="block py-4 px-6 w-full text-center text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200"
                    aria-label="Find us"
                  >
                    Find Us in Google Maps
                  </a>
                </div>
                
                <div className="w-full sm:w-4/5 mx-auto">
                  <a
                    href="mailto:contact@example.com"
                    className="block py-4 px-6 w-full text-center text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200"
                    aria-label="Email us"
                  >
                    Email Us to @blockhain4indo.id
                  </a>
                </div>
                
                <div className="w-full sm:w-4/5 mx-auto">
                  <a
                    href="tel:+1234567890"
                    className="block py-4 px-6 w-full text-center text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200"
                    aria-label="Call us"
                  >
                    Call Us +62-8898-2667-8788
                  </a>
                </div>
              </div>
            </div>
            
            <div
              className="fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);