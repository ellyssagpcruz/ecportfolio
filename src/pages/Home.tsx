import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Interests from '../components/sections/Interests';
import Experience from '../components/sections/Experience';
import Technologies from '../components/sections/Technologies';
import Contact from '../components/sections/Contact';

const Home = () => {
  useEffect(() => {
    document.title = "Elle's Portfolio";
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Interests />
        <Experience />
        <Technologies />
        <Contact />
      </main>
    </>
  );
};

export default Home;