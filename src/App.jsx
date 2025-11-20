import { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // AOS Initialize
    AOS.init({ duration: 1000 });

    // Locomotive Scroll Initialize
    // const scroll = new LocomotiveScroll({
    //   el: scrollRef.current,
    //   smooth: true,
    //   multiplier:0.1, 
    //   lerp: 0.1,
    // });

    const scroll = new LocomotiveScroll({
  el: scrollRef.current,
  smooth: true,
  multiplier: window.innerWidth < 768 ? 0.2 : 0.3,
  lerp: 0.1,
});


    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <main ref={scrollRef} data-scroll-container className="bg-gray-950 overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
