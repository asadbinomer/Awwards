import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTittle from './AnimatedTittle';
gsap.registerPlugin(ScrollTrigger); // Register the plugin

function About() {

  useEffect(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0, 
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-screen min-h-screen" id="About">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[16px]">Welcome to Zentry</h2>
        <AnimatedTittle title="Disc<b>o</b>ver the world's l<b>a</b>rgest <br /> shared adventure" containerClass="mt-5 !text-black text-center" />
        <div className="about-subtext font-medium">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>
      <div className="w-screen h-dvh" id="clip">
        <div className="mask-clip-path about-image">
          <img src="/img/about.webp" alt="Background" className="absolute left-0 top-0 size-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;
