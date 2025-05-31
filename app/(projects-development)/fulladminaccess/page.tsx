import React from 'react'
import FullNav1 from './componentes/fullnav1'
import HeroSectionFull from './componentes/herosectionfulll'
import SvgBg from './componentes/svgbg'

export default function FaaHome() {
  return (
    <div id='faa-homepage' className=''>
      <div className='relative z-10'>
        <FullNav1/>
        <HeroSectionFull/>
        <div className='h-screen pt-[6rem] p-[1rem]'>
          <div className='bg-black h-full rounded-[1rem] opacity-80'>test 2</div>
        </div>
      </div>
        <SvgBg/>
    </div>
  )
}
