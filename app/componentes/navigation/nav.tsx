import Logo from '../logo/logo'
import NavbarVisibility from './hide-navbar/hide-navbar'
import NavLinks from './nav-links'

export default function Nav() {
  return (
    <NavbarVisibility>
    <nav className="grid grid-cols-3 gap-3 h-[80px] p-[1rem] sticky top-0  items-center z-10">
      <Logo xclass='justify-self-center col-start-2'/>
      <NavLinks/>
    </nav>
    </NavbarVisibility>
  )
}
