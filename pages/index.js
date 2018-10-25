import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Interests from '../components/Interests'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import Head from 'next/head'
import '../scss/style.scss';

const Index = () => (
  <div>
    <Head>
      <title>Обо мне</title>
    </Head>
    <Navbar />
    <Banner />
    <Interests />
    <Reviews />
    <Footer />
  </div>
)


export default Index;