import type { NextPage } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import About from "../components/About";
import AboutCard from "../components/AboutCard";
import ShowCase from "../components/ShowCase";
const Home: NextPage = () => {
  return (
    <div className="">
      <Nav />
      <main className="top-0 pt-16">
        <div className="pt-12">
          <About />
        </div>
        <AboutCard />
        <div className='flex items-center justify-center'>
  <img src='/imgs/okk.png' />
  </div>
        <ShowCase />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
