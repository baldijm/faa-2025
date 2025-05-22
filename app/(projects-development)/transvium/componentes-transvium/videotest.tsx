import React from 'react'

export default function VideoTest() {
  return (
    <div className='absolute w-full h-full z-0'>
      {/* Degradado sobre el video */}
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-[1] bottom-[-1px]' />
      
      {/* Video */}
      <video 
        className='w-full h-full object-cover filter grayscale absolute z-0 top-0 left-0 opacity-80' 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src='/test_salida.mp4' type='video/mp4'/>
      </video>
    </div>
  )
}
