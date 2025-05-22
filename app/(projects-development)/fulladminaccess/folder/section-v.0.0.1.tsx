import React from 'react'

export default function SectionNote() {
  return (
          <section className=' h-max border relative'>
        <p id='tag' className='absolute top-0 left-0 outline-1 outline p-1'>container</p>
        <div className='w-full display flex flex-col justify-center items-center'>
          <h1 className='text-[80px] text-[crimson]'>¿Para que?</h1>
          <ol className='w-2/3 text-pretty text-center list-decimal list-inside space-y-4'>
            <li>Utilizar internet para monetizar.</li>
            <li>Crear un sitio web que le permita a las personas que la visiten conseguir recompensas economicas.</li>
            <li>Darle un sentido a mi vida.</li>
            <li>Tener un sustento economico para sobrevivir.</li>
          </ol>
        </div>
        <ul className='mt-[100px] p-3'>Notas:
          <li>No me considero un genio de la computación.</li>
          <li>Mi idea se basa en algo transaccional y simple.</li>
        </ul>
      </section>
  )
}
