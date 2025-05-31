import React from 'react'
import GlobeSVG from './svgs/globe'
import SparkSVG from './svgs/spark'
import TransportSVG from './svgs/transport'
import ShieldSVG from './svgs/shield'

const cards = [
  {
    id: 1,
    text: 'Conectamos tu negocio con proveedores y clientes en todo el mundo.',
    icon: <GlobeSVG />,
  },
  {
    id: 2,
    text: 'Tramitamos tus importaciones y exportaciones con precisión y rapidez.',
    icon: <SparkSVG />,
  },
  {
    id: 3,
    text: 'Transporte marítimo, aéreo o terrestre. Coordinamos de punta a punta.',
    icon: <TransportSVG />,
  },
  {
    id: 4,
    text: 'Diseñamos operaciones eficientes y seguras para tu cadena de suministro.',
    icon: <ShieldSVG />,
  },
]

export default function Cards() {
  const cardElements = cards.map((card) => (
    <div key={card.id} className="relative w-full">
      <div className="before:content-[''] before:block before:pt-[100%]" />
      <div className="absolute inset-0 rounded-[16px] bg-zinc-900 drop-shadow-xl flex flex-col items-center justify-center p-4 text-zinc-200">
        <div className="w-full flex flex-col items-center justify-center gap-2 px-2">
          {card.icon}
          <p className="text-[clamp(12px,1.5vw,20px)] xs:text-[9px] text-center leading-snug break-words">
            {card.text}
          </p>
        </div>
      </div>
    </div>
  ))

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-[1rem] p-[1rem] w-full mt-16 mb-16 ">
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