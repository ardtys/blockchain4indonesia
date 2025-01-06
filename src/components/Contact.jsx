import React from 'react';

export const Contact = () => {
  return (
    <section className="w-screen flex justify-center bg-white bg-opacity-5 py-20" id="contact">
      <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="max-w-lg">
              <p className="text-[#89B3A8] mb-4">
                Want to explore more about Blockchain?
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-primaryText mb-6">
                Leave us a message.
              </h2>
            </div>
          </div>
          
          <div className="w-full lg:w-auto">
            <a 
              href="#" 
              className="inline-block bg-[#89B3A8] text-white px-6 py-3 rounded-lg hover:bg-[#7AA096] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};