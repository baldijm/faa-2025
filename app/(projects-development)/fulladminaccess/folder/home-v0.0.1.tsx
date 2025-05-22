import React from 'react'

export default function FaaHome() {
  return (
    <div id='faa-container' className=' p-[8rem] pt-[17rem] pb-0'>
        <div className=' flex h-max w-full gap-1 text-black'>
            <section id='left' className=' h-max w-full flex flex-col gap-1'>
                <div className='bg-white h-[349px] flex items-center justify-center'>
                    Baldijm
                </div>
                <div className='h-[350px] flex gap-1'>
                    <div className='flex items-center justify-center bg-white aspect-square flex-1'>
                        1
                    </div>
                    <div className='flex items-center justify-center bg-white aspect-square flex-1'>
                        2
                    </div>
                </div>
            </section>
            <section id='right' className=' w-max h-auto'>
                <div className='bg-white h-full w-[440px] flex items-center justify-center'>
                    Secret Player Brotherhood
                </div>
            </section>
        </div>
    </div>
  )
}
