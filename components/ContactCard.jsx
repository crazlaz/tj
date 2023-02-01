import React from 'react'

const ContactCard = () => {
  return (
    <div>
<section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-12">
        <p class="max-w-l  text-2xl font-nunito">
          Reach out today for a free website consulating. Check how we can transform your current website to gain traffic and gain leads!
        </p>

        <div class="mt-8">
        <a href="mailto:paynani2022@gmail.com" className='font-bold text-1xl font-nunito text-red-600 underline'>Paynani2022@gmail.com</a>

          <div className='flex pr-14 pt-12 items-center justify-center'>
  <img src='/imgs/yup.png' />
  </div>
        </div>
      </div>

      <div class="rounded-lg bg-slate-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
      <form
          className="mx-auto flex w-full transform flex-col pt-6 transition duration-500 ease-in-out  "
          name="booking"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="booking" />

          <div hidden>
            <input name="bot-field" />
          </div>

          <div className="relative pt-4">
            <label
              htmlFor="name"
              className="text-blueGray-500 text-base font-black "
            >
              Name:
              <br />
              <input
                placeholder="Full Name"
                type="full-name"
                id="fullName"
                name="fullName"
                className="focus:border-blueGray-500 focus:shadow-outline mt-2 mr-4 w-full transform rounded-lg bg-wood px-4 py-2 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out focus:bg-wood focus:outline-none focus:ring-2"
              />
            </label>
          </div>

          <div className="relative pt-4">
            <label
              htmlFor="name"
              className=" text-blueGray-500 text-base font-black"
            >
              Phone:
            </label>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Number"
              className="focus:border-blueGray-500 focus:shadow-outline mt-2 mr-4 w-full transform rounded-lg bg-wood px-4 py-2 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out focus:bg-wood focus:outline-none focus:ring-2"
            />
          </div>

          <div className="relative pt-4">
            <label
              htmlFor="e-mail"
              className="text-blueGray-500 text-base font-black "
            >
              E-Mail:
            </label>
            <input
              type="text"
              id="e-mail"
              name="e-mail"
              placeholder="E-Mail"
              className="font-blackfocus:border-blueGray-500 focus:shadow-outline mt-2 mr-4 w-full transform rounded-lg bg-wood px-4 py-2 text-base text-black ring-offset-2 ring-offset-current transition duration-500 ease-in-out  focus:outline-none focus:ring-2"
            />
          </div>
          <div className="inline-block relative pt-6 pb-6 ">
            <label className="font-black" htmlFor="lashes">
              Service Needed:
            </label>
            <select
              id="lashes"
              name="lashes"
              className="block appearance-none w-full bg-wood border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option id="lashes" className='text-bold'>Silver</option>
              <option id="lashes">Gold </option>
              <option id="lashes">Platinum</option>
              <option id="lashes">Update Existing Website</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div>
            <textarea
              name="comments"
              className=" focus:shadow-outline apearance-none autoexpand mt-2 h-32 w-full transform rounded-lg border bg-wood px-4 py-2 text-base ring-offset-2 ring-offset-current transition duration-500 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2"
              id="description"
              maxLength={200}
              placeholder="Message..."
            ></textarea>
          </div>

          <div className="mb-4 flex w-full items-center pt-4">
            <button
              alert-message="Message"
              type="submit"
              className="w-full transform rounded-md border-red-600 bg-red-400 py-3 text-base text-white text-2xl font-bold "
            >
              Send!
            </button>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ContactCard