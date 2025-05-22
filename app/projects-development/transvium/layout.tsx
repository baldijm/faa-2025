import NavTvium from '@/app/(projects-development)/transvium/componentes-transvium/navigation/nav-tvium';
import React from 'react'

export default function TransviumRootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>    
) {
  return (
    <div className='h-full flex flex-col'>
        <NavTvium/>
        {children}
    </div>
  )
}
