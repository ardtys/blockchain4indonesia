import { useState } from "react";
import { motion } from "framer-motion";

const IndustryData = [
  {
    question: "Enterprise blockchain solutions for Indonesia",
    answer:
      "We work with ground breaking blockchains that have impressive speeds, scalability, low fees and military grade security. When working blockchains4Indonesia your business will improve record keeping, exchange data and transfer your assets more efficiently and more securely.",
  },
  {
    question: "What is the purpose of blockchain4Indonesia?",
    answer:
      "To give power back to you and your business partners. By leveraging blockchain, DLT, fintec and web 3 we're opening up doors for owning, controlling your own trade, trade finance and business data. Creating very inexpensive advanced instant settlements, high grade military security, decentralized data storage chain. Opening up economics boarders 24/7 365 accelerating your business.",
  },
  {
    question: "How does blockchain4Indonesia work?",
    answer:
      "We use leading edge providers of digital asset infrastructure for finance, send cross boarder payments in real time. Engage with tokenization and digital assets, meeting regulatory compliant with MLETR standards. We use our own development of Dapps that aims to redefine the global trade finance industry by digitizing the whole process. Working closely with its solution eco system partners it promises to deliver interoperability of MLETR solutions, funding for trade edocuments on a MLETR compliant standard.",
  },
];

export const Industry = () => (
  <section className="relative -mt-8 sm:mt-0 pt-12 sm:pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="industry" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 block-subtitle text-center">Everything about our industry</p>
          <h2 className="mb-16 block-big-title text-center">
            Industry
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {IndustryData.map((item, index) => (
              <div className="w-full p-1" key={`${item.question}-${index}`}>
                <IndustryBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const IndustryBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-bgDark3 main-border-gray-darker mb-4 relative hover:bg-bgDark3Hover cursor-pointer transition"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p
          className={`text-secondaryText pt-4 transition-height duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};