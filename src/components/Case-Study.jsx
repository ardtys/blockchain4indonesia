import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const solutionsData = [
  {
    title: "Government Solution",
    description: "Assisting government transforms services and businesses to blockchain based solutions.",
    image: "/api/placeholder/400/320",
    stats: {
      percentage: "35%",
      count: "200",
      label: "Notarized Data",
      growth: "27.8% this month"
    }
  },
  {
    title: "Finance Industry",
    description: "Blockchain solutions that offer transparency, traceability, and further trust.",
    image: "/api/placeholder/400/320",
    stats: {
      symbol: "BTC",
      price: "$6780",
      percentage: "11.75%"
    }
  }
];

const chartData = Array(12).fill().map((_, i) => ({
  name: i,
  value: Math.random() * 100
}));

export const Casestudy = () => (
  <section className="w-screen flex justify-center bg-bgDark2 relative" id="casestudy">
    <div className="absolute -top-16" id="usecase" />
    <div className="pb-0 pt-4 bg-bgDark2 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container px-4 mb-20">
          <div className="max-w-2xl text-center mx-auto mb-16">
            <span className="text-[#89B3A8] uppercase tracking-wider">USE CASE</span>
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
              Innovation & Solution
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionsData.map((solution, index) => (
              <div key={index} className="bg-white bg-opacity-5 rounded-3xl p-8">
                <div className="h-64 mb-8 relative bg-[#89B3A8] bg-opacity-20 rounded-2xl overflow-hidden">
                  {index === 0 ? (
                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-lg text-sm">
                      ↑ {solution.stats.percentage}
                    </div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chartData}>
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#89B3A8" 
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                  
                  {index === 0 && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-4">
                      <div className="bg-[#89B3A8] rounded-full p-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{solution.stats.count}</div>
                        <div className="text-sm text-gray-300">{solution.stats.label}</div>
                        <div className="text-xs text-[#89B3A8]">{solution.stats.growth}</div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="bg-[#89B3A8] rounded-full p-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">{solution.stats.symbol}</div>
                        <div className="text-xl font-bold text-white">{solution.stats.price}</div>
                        <div className="text-sm text-[#89B3A8]">+{solution.stats.percentage}</div>
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-primaryText mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {solution.description}
                </p>
                <a href="#" className="text-[#89B3A8] hover:text-[#7AA096] transition-colors">
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);