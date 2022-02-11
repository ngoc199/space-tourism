import React from 'react'
import NavLink from './NavLink'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className='navbar'>

      <Link className='navbar__logo' to='/'><img src="/img/shared/logo.svg" alt="Space Tourism Logo" /></Link>

      <hr className='navbar__line' />

      <nav>
        <ul className='navbar__links'>
          <NavLink linkNumber={0} href='/'>Home</NavLink>
          <NavLink linkNumber={1} href='/destination'>Destination</NavLink>
          <NavLink linkNumber={2} href='/crew'>Crew</NavLink>
          <NavLink linkNumber={3} href='/technology'>Technology</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar