import React from 'react'

export default function FaaLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main id='faa-layout' className='h-full flex flex-col font-satoshi'>
        {children}
    </main>
  )
}
