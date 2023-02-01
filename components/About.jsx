import React from "react";
const About = () => {
  return (
    <main className="flex items-center bg-white justify-center py-6 bg-white rounded-lg  pb-12">
      <div>
        <div className="grid  pl-6  text-primary-content  pr-6 place-content-center">
          <p className="text-gray-700  font-nunito leading-relaxed  pt-16 font-extrabold text-4xl ">
            A little story about Paynani
          </p>
        </div>
        <div className="grid   place-content-right pl-6">
          <p className="text-gray-700 pb-12 pl-6 font-nunito leading-relaxed mb-4 pt-12 font-bold text-1xl ">
            and how we have been helping hundreds of customers across the Americas.
          </p>
        </div>
        <div className="pl-8 pt-12 ">
            <a href="/contact">
          <button class="bg-transparent grid pl-4   place-content-right pl-5  hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            Contact Us
          </button>
          </a>
        </div>
      </div>

      <div className="flex items-right justify-right h-screenx">
        <img src="/imgs/About.png" 
        className="max-w-full h-auto "
        />
      </div>
    </main>
  );
};

export default About;