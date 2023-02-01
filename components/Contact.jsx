import React from "react";
const Contact = () => {
  return (
    <main className="flex items-center bg-white justify-center py-6 bg-white rounded-lg shadow-md pb-12">
      <div>
        <div className="grid    text-primary-content  pl-6 place-content-center">
          <p className="text-gray-700  font-nunito leading-relaxed  pt-16 font-extrabold text-3xl ">
Contact us to get started on your new website 
         <a className="text-red-600 underline"> Today!</a>
          </p>
        </div>


      </div>

      <div className="flex items-right justify-right h-screenx">
        <img src="/imgs/Contact.png" 
        className="max-w-full h-auto "
        />
      </div>
    </main>
  );
};

export default Contact;