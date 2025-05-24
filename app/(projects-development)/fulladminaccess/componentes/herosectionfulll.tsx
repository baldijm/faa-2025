import Link from 'next/link'
import React from 'react'

export default function HeroSectionFull() {
  return (
    <div id='hero-section-wrapper' className=' h-[559] relative w-screen z-[1]'>
        <div id='hero-container' className='h-full flex w-screen'>
            <div className='w-full'>
                <div className='h-full flex flex-col justify-center ml-20 mr-20'>
                <h1 className='font-satoshi-black text-[53px] leading-tight grid gap-0'>Tu espacio digital.<span>A tu manera.</span></h1>
                <p>Cada negocio, idea u oficio merece presencia propia. Creamos soluciones digitales que se sienten tuyas.</p>
                <div className='mt-[2rem]'>
                <Link href={''} className='font-satoshi-black border p-3'>Explorar soluciones</Link>
                </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center h-full'>
            </div>
        </div>
    </div>
  )
}
