import React from 'react'

export default function SvgBg() {
  return (
      <div className='fixed top-0 h-full w-full z-0'>

        <svg 
        xmlns='http://www.w3.org/2000/svg'
        className='absolute top-0 h-full w-full'
        >
        <circle cx="50" cy="50" r="400" strokeWidth="4" className='fill-[cyan] opacity-90' />        
        <circle cx="1200" cy="600" r="400" strokeWidth="4" className='fill-[crimson] opacity-80' /> 
        </svg>
        <div className='absolute h-full w-full backdrop-blur-[200px]'></div>
    </div>
  )
}
