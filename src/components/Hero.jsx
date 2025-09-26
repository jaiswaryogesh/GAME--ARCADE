import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <main className='relative w-full h-screen overflow-hidden flex justify-center items-center mb-[10%]'>

      {/* 🔹 Background Video */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-full object-cover absolute top-0 left-0 -z-10'
      />

      {/* 🔹 Foreground Content */}
      <motion.div
        className='absolute bottom-[12%] flex flex-col items-center gap-5 text-white'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 🔸 Hero Logo Text */}
        <motion.img
          src="/images/illu-text.png"
          alt="illu"
          className='md:w-[30rem] w-[20rem]'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        {/* 🔸 Subheading */}
        <h1 className='md:text-2xl text-xl font-bold text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]'>
          Explore, Capture, Conquer
        </h1>

        {/* 🔸 Divider Line */}
        <div className='md:w-[75%] w-[60%] h-[1px] bg-[#baba]'></div>

        {/* 🔸 CTA Button */}
        <motion.button
          className="h-10 px-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-semibold text-white hover:opacity-80 hover:scale-105 transition-all duration-300 shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          PLAY NOW
        </motion.button>

        {/* 🔸 Logo Branding */}
        <div className='flex items-center gap-5 text-3xl font-extrabold text-[#e0e0ff]'>
          <img className='md:h-16 h-12' src="/images/illu-logo.png" alt="logo" />
         𝔗𝔯𝔦𝔦𝔦𝔑𝔢𝔱𝔯𝔞
        </div>

        {/* 🔸 Description */}
        <p className='max-w-[80%] text-center text-[#babaff] text-sm md:text-base leading-relaxed'>
          A mythic arena awaits. Build your squad, master the battlefield, and awaken the eye of insight.
        </p>
      </motion.div>

      {/* 🔹 Scroll Down Indicator */}
      <div className='absolute bottom-6 right-6 lg:right-20 animate-bounce'>
        <div className='flex flex-col items-center'>
          <div className='w-8 h-12 border-2 border-[#babaff] rounded-full flex justify-center pt-1'>
            <div className='w-1 h-3 bg-[#babaff] rounded-full animate-pulse'></div>
          </div>
          <p className='text-[#babaff] text-xs mt-2'>Scroll</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
