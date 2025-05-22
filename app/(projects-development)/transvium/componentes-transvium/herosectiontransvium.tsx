import React from 'react'
import Modal from './modal'

export default function HeroSectionTransvium() {
  return (
    <section className=' h-max w-full'>
      <div className='grid h-max gap-[0.5rem]'>
        <h1 className='leading-[1.1] text-shadow text-[50px] xs:text-[35px] font-satoshi-black'>
          <span className='block text-nowrap'>Gestion integral</span>
          <span className='block text-nowrap'>para negocios</span>
          <span className='block '>y logistica internacional.</span>
        </h1>
        <p className='font-satoshi-regular text-gray-300'>Empresas y emprendedores nos eligen para hacer que sus operaciones internacionales sean más ágiles, eficientes y seguras.</p>
        <Modal/>
      </div>
    </section>
  )
}
