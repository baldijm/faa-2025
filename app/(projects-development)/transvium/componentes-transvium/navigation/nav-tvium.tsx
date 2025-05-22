import Link from 'next/link'
import React from 'react'

export default function NavTvium() {
  return (
    <nav className='h-[4.4rem] flex items-center p-[1rem] sticky top-[-1] z-10 bg-[rgba(0,0,0,0.65)] backdrop-blur-[12px] border-b border-b-[var(--border-b-x)]'>
      <Link href="/projects-development/transvium">Transvium</Link>
    </nav>
  )
}
