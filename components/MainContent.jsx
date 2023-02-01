import React from "react";
const MainContent = () => {
  return (
    <main className="flex items-center justify-center py-6 bg-white rounded-lg shadow-md pb-12">
      <div>
        <div className="grid    text-primary-content  pl-3 place-content-center">
          <p className="text-gray-700 f font-nunito leading-relaxed mb-4 pt-12 font-extrabold text-3xl ">
            Don't just exist online <a className="text-red-600">Thrive</a> with
            a top-quality website from Paynani.
          </p>
        </div>
        <div className="grid   place-content-right pl-3">
          {" "}
          <p className="text-gray-700 pb-12 font-nunito leading-relaxed mb-4 pt-12 font-bold text-1xl ">
            Top Rated Web Development Company with 20+ Experts in
            UI/UX, Mobile, SaaS, Web & Cloud.
          </p>
        </div>
        <div className="pl-3 pt-12">
            <a href="/contact">
          <button class="bg-transparent grid   place-content-right pl-5  hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            Contact Us
          </button>
          </a>
        </div>
      </div>

      <div className="flex items-right justify-right h-screenx">
        <img src="/imgs/main.png" 
        className="max-w-full h-auto "
        />
      </div>
    </main>
  );
};

export default MainContent;
