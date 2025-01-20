import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // const audioRef = useRef(null);

  // const [isPlaying, setIsPlaying] = useState(true); 

  // const handlePlayPause = () => {
  //   if (audioRef.current.paused) {
  //     audioRef.current.play();
  //     setIsPlaying(true); 
  //   } else {
  //     audioRef.current.pause();
  //     setIsPlaying(false);
  //   }
  // };

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //     setIsPlaying(true);
  //   }
  // }, []);

  return (
    <>
      <main className='relative min-h-screen w-screen overflow-x-hidden'>
        <Navbar/>
        <Hero />
        <About />
        <Features/>
        <Story/>
        <Contact/>
        <Footer/>
      </main>
      {/* <audio ref={audioRef} src="/audio/audio.mkv" loop autoPlay />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={handlePlayPause}
        className={`group z-[1000] w-fit cursor-pointer overflow-hidden rounded-full fixed bottom-5 bg-yellow-300 transition-all duration-500 right-5 px-7 py-3 text-black inline-flex font-general text-xs uppercase`}
      >
        {isPlaying ? 'Audio Pause' : 'Audio Play'}
      </motion.button> */}
    </>
  );
}

export default App;
