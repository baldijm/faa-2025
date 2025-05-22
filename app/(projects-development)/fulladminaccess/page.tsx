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
        <div className='bg-white h-[200px]'> test 2</div>
      </div>
        <SvgBg/>
    </div>
  )
}
