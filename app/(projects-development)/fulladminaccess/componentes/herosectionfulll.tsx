import Link from 'next/link'
import React from 'react'

export default function HeroSectionFull() {
  return (
    <div id='hero-section-wrapper' className=' h-[559] relative w-screen z-[1]'>
        <div id='hero-container' className='h-full flex w-screen'>
            <div className='w-full flex justify-center text-center'>
                <div className='h-full flex flex-col justify-center ml-20 mr-20'>
                <h1 className='font-satoshi-black text-[53px] leading-tight grid gap-0'>Tu espacio digital.<span>A tu manera.</span></h1>
                <p>Desarrollamos tu espacio digital con identidad propia, pensado para ti. Hecho a tu medida.</p>
                <div className='mt-[2rem] flex gap-4 justify-center'>
                <Link href={''} className='font-satoshi-black bg-black p-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200 ease-in-out '>Explorar soluciones</Link>
                <Link href={''} className='font-satoshi-black bg-black p-3 rounded-full hover:bg-white hover:text-black transition-colors duration-200 ease-in-out '>Demos</Link>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
