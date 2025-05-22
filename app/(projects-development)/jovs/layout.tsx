import React from 'react'

export default function JovsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main className='h-full flex flex-col font-satoshi'>
        {children}
    </main>
  )
}
