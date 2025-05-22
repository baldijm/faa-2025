import React from 'react'
import GlobeSVG from './svgs/globe'
import SparkSVG from './svgs/spark'
import TransportSVG from './svgs/transport'
import ShieldSVG from './svgs/shield'

const cards = [
    {id: 1, text: "Conectamos tu negocio con proveedores y clientes en todo el mundo.", icon: <GlobeSVG/>},
    {id: 2, text: "Tramitamos tus importaciones y exportaciones con precisión y rapidez.", icon: <SparkSVG/>},
    {id: 3, text: "Transporte marítimo, aéreo o terrestre. Coordinamos de punta a punta.", icon: <TransportSVG/>},
    {id: 4, text: "Diseñamos operaciones eficientes y seguras para tu cadena de suministro.", icon: <ShieldSVG/>}
]

export default function Cards() {

  const cardElements = cards.map((card) =>
    <div key={card.id} className='lg:justify-self-center aspect-square rounded-[16px] bg-zinc-900 drop-shadow-xl xs:bg-zinc-900 md:bg-[green] lg:bg-[yellow] xl:bg-[red] flex flex-col p-[1rem] items-center text-balance text-center gap-2 text-zinc-200'>
        {card.icon}
        <p className='text-sm'>{card.text}</p>
    </div>
  );
  
  return (
    <section className='grid grid-cols-2 gap-[1rem] h-full w-full'>
      {cardElements}
    </section>
  )
} 

/**
 *         <div className='lg:justify-self-center aspect-square rounded-[16px] bg-zinc-900 drop-shadow-xl xs:bg-zinc-900 md:bg-[green] lg:bg-[yellow] xl:bg-[red] flex flex-col p-[1rem] items-center text-balance text-center'><GlobeSVG/><p>Conectamos tu negocio con proveedores y clientes en todo el mundo.</p></div>
        <div className='lg:justify-self-center aspect-square rounded-[16px] bg-zinc-900 drop-shadow-xl xs:bg-zinc-900 md:bg-[green] lg:bg-[yellow] xl:bg-[red] flex flex-col p-[1rem] items-center text-balance text-center'><SparkSVG/><p>Tramitamos tus importaciones y exportaciones con precisión y rapidez.</p></div>
        <div className='lg:justify-self-center aspect-square rounded-[16px] bg-zinc-900 drop-shadow-xl xs:bg-zinc-900 md:bg-[green] lg:bg-[yellow] xl:bg-[red] flex flex-col p-[1rem] items-center text-balance text-center'><TransportSVG/><p>Transporte marítimo, aéreo o terrestre. Coordinamos de punta a punta.</p></div>
        <div className='lg:justify-self-center aspect-square rounded-[16px] bg-zinc-900 drop-shadow-xl xs:bg-zinc-900 md:bg-[green] lg:bg-[yellow] xl:bg-[red] flex flex-col p-[1rem] items-center text-balance text-center'><ShieldSVG/><p>Diseñamos operaciones eficientes y seguras para tu cadena de suministro.</p></div>

 */