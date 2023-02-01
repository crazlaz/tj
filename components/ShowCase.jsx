import React from 'react'

const ShowCase = () => {
  return (
    <div>
        <section>
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 class="text-xl font-bold font-nunito text-gray-900 sm:text-3xl">
        Our Showcase
      </h2>

      <p class="max-w-md mt-4 text-gray-700 ">
        Check out our most recent work. Get inspired our innovation is key to customer satisfaction!
      </p>
    </header>

    <ul class="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="/imgs/showcase1.png"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              SavvyCal
            </h3>

          </div>
        </a>
      </li>

      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="/imgs/showcase2.png"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Opal
            </h3>

          
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="/imgs/showcase3.png"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Modern Treasury
            </h3>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="block overflow-hidden group">
          <img
            src="/imgs/showcase4.png"
            alt=""
            class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div class="relative pt-3 bg-white">
            <h3
              class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
            >
              Pocket
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

export default ShowCase