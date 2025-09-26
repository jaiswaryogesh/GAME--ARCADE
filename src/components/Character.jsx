import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Character = () => {
  const [selectedAvatar, setSelectedAvatar] = useState('VIKI');

  const Avatar = {
    VIKI: {
      name: 'VIKI',
      power: 70,
      stable: 95,
      penetrate: 30,
      portable: 80,
      stars: 3,
    },
    EVA: {
      name: 'EVA',
      power: 90,
      stable: 80,
      penetrate: 70,
      portable: 60,
      stars: 4,
    },
  };

  const currentAvatar = Avatar[selectedAvatar];

  return (
    <div className='relative w-full h-screen overflow-hidden mb-[10%]'>

      {/* Header Title */}
      <div className='relative z-10 pt-6 text-center'>
        <h1
          className='text-5xl font-bold tracking-widest md:-mb-14 mb-8'
          style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.7)' }}
        >
          AVATAR
        </h1>
      </div>

      {/* Layout: Stats & 3D Model */}
      <div className='relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4'>

        {/* LEFT: Avatar Info & Switcher */}
        <div className='w-full md:w-2/4 flex flex-col md:ml-10'>
          {/* Stats Card */}
          <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]'>
            <h1 className='text-2xl font-semibold mb-2'>{currentAvatar.name}</h1>
            <div className='space-y-3 mb-16'>
              {['power', 'stable', 'penetrate', 'portable'].map((stat) => (
                <div className='flex items-center' key={stat}>
                  <span className='w-24 text-gray-400'>{stat.toUpperCase()}</span>
                  <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-violet-600 to-white'
                      style={{ width: `${currentAvatar[stat]}%` }}
                    />
                  </div>
                  <span className='ml-2'>{currentAvatar[stat]}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className='flex gap-3'>
              <button className='px-4 py-2 bg-violet-900 text-white font-semibold rounded-md hover:opacity-70 transition-all duration-300'>
                Proficient
              </button>
              <button className='px-4 py-2 bg-violet-900 text-white font-semibold rounded-md hover:opacity-70 transition-all duration-300'>
                Redemption
              </button>
            </div>
          </div>

          {/* Avatar Selection Grid */}
          <div className='grid grid-cols-2 gap-4'>
            {Object.keys(Avatar).map((key) => (
              <div
                key={key}
                onClick={() => setSelectedAvatar(key)}
                className='relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-3 border flex flex-col justify-between items-center cursor-pointer transition-all duration-300'
              >
                <div className='text-lg mb-2'>{Avatar[key].name}</div>
                <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                  <img src={`/images/${Avatar[key].name}.png`} alt={Avatar[key].name} />
                </div>
                <div className='flex'>
                  {[...Array(Avatar[key].stars)].map((_, index) => (
                    <Star key={index} className='w-4 h-4 fill-violet-400 text-violet-500' />
                  ))}
                </div>
                {selectedAvatar === key && (
                  <div className='absolute inset-0 border-2 border-violet-500 rounded-lg pointer-events-none'></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: 3D Model Display */}
        <div className='relative md:w-2/4 w-full md:h-full h-80 flex items-center overflow-hidden'>
          {selectedAvatar === 'VIKI' ? (
            <motion.div
              key='VIKI'
              className='absolute inset-0 flex justify-center items-center'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.5 }}
            >
              <Spline scene="https://prod.spline.design/M1bc50oaed2Z7vKr/scene.splinecode" />
            </motion.div>
          ) : (
            <motion.div
              key='EVA'
              className='absolute inset-0 flex justify-center items-center'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.5 }}
            >
              <Spline scene='https://prod.spline.design/7sJPRld9vP2AgtKz/scene.splinecode' />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Character;
