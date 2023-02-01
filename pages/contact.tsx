import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Contact from '../components/Contact'
import ContactCard from '../components/ContactCard'
const Home: NextPage = () => {
  return (
    <div className=''>
 <Nav />
 <main className='top-0 pt-16'>

  <div className='pt-12'>
      <Contact />
  </div>
<ContactCard />
 </main>
      <footer className="footer">
      <Footer />
      </footer>
    </div>
  )
}

export default Home

