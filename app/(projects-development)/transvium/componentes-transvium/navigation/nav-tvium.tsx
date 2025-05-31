import SVGTransvium from '@/app/(my-apps)/test-area/(componentes)/svgtrans'
import Link from 'next/link'
import React from 'react'

export default function NavTvium() {
  return (
    <nav className=' fixed w-full flex z-10'>
      <div className='flex items-center p-4 h-[4.4rem] mt-[2rem] ml-[4rem] mr-[4rem] w-full from-ml-to-b:m-0 from-ml-to-b:bg-[rgba(f,f,f,f.65)] from-ml-to-b:backdrop-blur-[12px]'>
        <SVGTransvium/>
        <Link href="/projects-development/transvium" className='text-3xl font-satoshi-bold'>Transvium</Link>
      </div>
    </nav>
  )
}
