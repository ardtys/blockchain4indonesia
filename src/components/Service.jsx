import { motion } from "framer-motion";

const servicesData = [
  {
    icon: "🗄️",
    title: "Blockchain Research & Consulting",
    description: "We objectively pick the Blockchain protocol and solution to suits the client's need and wants."
  },
  {
    icon: "💻",
    title: "Blockchain Development",
    description: "Smart Contracts, Tokenizations, NFTs, and Web3.0."
  },
  {
    icon: "💼",
    title: "Blockchain Workshop & Training",
    description: "From Blockchain 101 to advanced learning programs."
  },
  {
    icon: "👥",
    title: "System Support & Maintenance",
    description: "With our support solution, your business can continue to focus on what you do best while we handle the technical side."
  }
];

export const Service = () => {
  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="services" />
      <div className="pb-20 pt-12 bg-bgDark2 2xl:w-[1150px] lg:w-[1050px] md:w-4/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-gray-400 uppercase tracking-wider">OUR SERVICE</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                Our Expertise
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesData.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-5 rounded-lg p-8 text-center hover:bg-opacity-10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-[#89B3A8] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primaryText mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};