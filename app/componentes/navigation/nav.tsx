import Logo from '../logo'
import NavLinks from './nav-links'

export default function Nav() {
  return (
    <nav className="h-[3.5rem] flex gap-3 p-3 items-center">
      <Logo xclass="text-4xl font-bold"/>
      <NavLinks xclass='flex gap-10'/>
    </nav>
  )
}
