import Cards from '@/app/(projects-development)/transvium/componentes-transvium/cards'
import FooterTransvium from '@/app/(projects-development)/transvium/componentes-transvium/footer'
import HeroSectionTransvium from '@/app/(projects-development)/transvium/componentes-transvium/herosectiontransvium'
import HowItWorks from '@/app/(projects-development)/transvium/componentes-transvium/howitworks'
import VideoTest from '@/app/(projects-development)/transvium/componentes-transvium/videotest'
import React from 'react'

export default function TransviumHome() {
  return (
    <div id="scroll-container" className='h-full w-full flex flex-col'>
      <div className='lg:h-screen md:h-screen from-ml-to-b:h-[85dvh]  w-full relative flex flex-col'>
        <VideoTest/>
        <div className='mt-[3rem] gap-[2rem] h-full relative p-[1rem] flex flex-col'>
          <HeroSectionTransvium/>
        </div>
      </div>
      <Cards/>
      <HowItWorks/>
      <FooterTransvium/>
    </div>
  )
}
