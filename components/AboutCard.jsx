import React from 'react'

const AboutCard = () => {
  return (
    <div>

<section>
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 class="text-xl font-bold font-nunito text-gray-900 sm:text-3xl">
        Meet Our Lead Developers!
      </h2>

      <p class="max-w-md mt-4 text-gray-800">
        Each one of us at Paynani have over 5 years of building websites and running social media accounts. We are dedicated to helping your company grow!

      </p>
    </header>

    <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="/imgs/Hire.jpg"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Backend - Developer
            </h3>

          </div>
        </a>
      </li>

      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="/imgs/Hire2.jpg"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Full Stack - Developer
            </h3>

          </div>
        </a>
      </li>

      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="/imgs/Hire3.jpg"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Full Stack - Developer
            </h3>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="/imgs/Hire4.jpg"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Design & Imagination 
            </h3>

          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

    </div>
  )
}

export default AboutCard