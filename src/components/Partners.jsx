import { motion } from "framer-motion";
import { XDC } from '../assets/logos/XDC';
import { TradeTrust } from '../assets/logos/TradeTrust';
import { ICC } from '../assets/logos/ICC';

export const Partners = () => (
  <section className="py-24 lg:py-32 bg-bgDark1">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 min-h-[10px] flex items-center"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondaryColor">
            Partner networks
          </h2>
          <p className="text-lg lg:text-xl text-primaryText max-w-2xl">
            We work with enterprise grade, open source blockchain protocol with EVM-compatible chain.
          </p>
        </div>
        <div className="lg:w-1/2 grid grid-cols-3 gap-8 lg:gap-12 items-center">
          {[XDC, ICC, TradeTrust].map((Logo, i) => (
            <div key={i} className="flex justify-center p-4">
              <Logo />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);