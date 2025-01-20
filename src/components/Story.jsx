import React, { useRef } from 'react'
import AnimatedTitle from './AnimatedTittle'
import Button from './Button'
import gsap from 'gsap';
import RoundedCorner from './roundedCorner';

function Story() {

   const frameRef = useRef('null');

   const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const element = frameRef.current;

      if(!element) return;

      const rect = element.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;


      gsap.to(element, {
         duration: 0.3,
         rotateX, rotateY,
         transformPerspective: 500,
         ease: 'power1.inOut'
      })
   }

   const handleMouseLeave = () => {

      const element = frameRef.current;

      gsap.to(element, {
         duration: 0.3,
         rotateX: 0,
         rotateY: 0,
         ease: 'power1.inOut'
      })
   }
   
  return (
    <>
    <section id='Story' className='w-screen min-h-dvh bg-black text-blue-50'>
      <div className="size-full flex flex-col items-center">
         <p className='font-general text-sm uppercase md:text-[10px]'>the multiversal ip world</p>
         <div className="relative size-full items-center text-center">
            <AnimatedTitle sectionId="#story" containerClass="mt-5 max-w-[800px] text-white mx-auto pointer-events-none items-center w-full mix-blend-difference relative z-10 text-center" title="The st<b>o</b>ry of <br /> a hidden real<b>m</b>"/>
            <div className="story-img-container">
               <div className="story-img-mask">
                  <div className="story-img-content">
                     <img src="/img/entrance.webp" className='object-contain' ref={frameRef} alt="" onMouseEnter={handleMouseLeave} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseLeave} />
                  </div>
               </div>
               <RoundedCorner/>
            </div> 
         </div>
         <div className="flex w-full justify-center  translate-y-[-110%] md:me-44 md:justify-end">
            <div className="w-fit h-full flex flex-col items-center md:items-start">
               <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.</p>
               <Button id='realm-button' title='discover Prologue' containerClass="mt-5" />
            </div>
         </div>
      </div>
    </section>
    </>
  )
}

export default Story