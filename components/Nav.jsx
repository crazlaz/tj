import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white fixed ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
            <img src='imgs/main.svg' />
              </Link>
            
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/imgs/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/imgs/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6  font-nunito text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-red-600  border-red-900  md:hover:text-red-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-xl font-nunito text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-red-600  border-red-900  md:hover:text-red-600 md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className="pb-6 text-xl text-black py-2 font-nunito px-6 text-center  border-b-2 md:border-b-0  hover:bg-red-600  border-red-900  md:hover:text-red-600 md:hover:bg-transparent">
                  <Link href="/price" onClick={() => setNavbar(!navbar)}>
                    Pricing
                  </Link>
                </li>
                <li className="pb-6 text-xl text-red-600 py-2 font-nunito px-6 text-center  border-b-2 md:border-b-0  hover:bg-red-200  border-red-900  md:hover:text-red-600 md:hover:bg-transparent">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;