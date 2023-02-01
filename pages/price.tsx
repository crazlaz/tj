import type { NextPage } from "next";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Price from "../components/Price";
import PriceCard from "../components/PriceCard";
const Home: NextPage = () => {
  return (
    <div className="">
      <Nav />
      <main className="top-0 pt-16">
        <div className="pt-12">
          <Price />
        </div>
 
      <PriceCard />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
