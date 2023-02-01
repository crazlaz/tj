import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import MainContent from '../components/MainContent'
import ServiceSection from '../components/ServiceSection'
import TestimonialSection from '../components/TestimonialSection'





const Home: NextPage = () => {
  return (
    <div className=''>
 <Nav />
 <main className='top-0 pt-16'>

  <div className='pt-12'>
  <MainContent />
  </div>
  <ServiceSection />

  <div className='flex items-center justify-center'>
  <img src='/imgs/ok.png' />
  </div>
  <TestimonialSection />
 </main>
      <footer className="footer">
      <Footer />
      </footer>
    </div>
  )
}

export default Home
