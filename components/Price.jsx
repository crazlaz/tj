import React from "react";
const Price = () => {
  return (
    <main className="flex items-center bg-slate-300 justify-center py-6 bg-white rounded-lg shadow-md pb-12">
      <div>
        <div className="grid    text-primary-content  pl-6 place-content-center">
          <p className="text-gray-700  font-nunito leading-relaxed  pt-16 font-extrabold text-3xl ">
          Whether it's updating an existing website or creating a new one!

            We got you <a className="text-red-600 underline">covered</a>
          </p>
        </div>


      </div>

      <div className="flex items-right justify-right h-screenx">
        <img src="/imgs/Price.png" 
        className="max-w-full h-auto "
        />
      </div>
    </main>
  );
};

export default Price;