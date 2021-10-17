import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisme/navbar';
import MainBanner from '../components/organisme/MainBanner/index';
import TransactionStep from '../components/organisme/TransactionStep';
import FeaturedGame from '../components/organisme';
import Reached from '../components/organisme/Reached';
import Story from '../components/organisme/Story';
import Footer from '../components/organisme/Footer';

export default function Home(){
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <Navbar />
    <MainBanner />
    <TransactionStep />
    <FeaturedGame />
    <Reached />
    <Story />
    <Footer />
    
    </>
  )
}

//export default Home
