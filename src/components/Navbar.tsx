import React from 'react'
import NavLink from './NavLink'
import "./Navbar.scss"

type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className='navbar'>
      <nav>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/destination'>Destination</NavLink>
        <NavLink href='/crew'>Crew</NavLink>
        <NavLink href='/technology'>Technology</NavLink>
      </nav>
    </header>
  )
}

export default Navbar