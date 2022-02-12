import React from 'react'
import NavLink from './NavLink'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = () => {

  const [open, setOpen] = React.useState(false)

  const handleMenuClick = () => {
    setOpen(prevState => !prevState)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <header className='navbar mt-10'>

      <Link className='navbar__logo' to='/'><img src="/img/shared/logo.svg" alt="Space Tourism Logo" /></Link>

      <hr className='navbar__line' />

      <nav className='navbar__nav'>
        <ul className={'nav__links ' + (open ? 'nav__links--open' : '')}>
          <NavLink linkNumber={0} href='/' onClick={handleClose}>Home</NavLink>
          <NavLink linkNumber={1} href='/destinations' onClick={handleClose}>Destination</NavLink>
          <NavLink linkNumber={2} href='/crews' onClick={handleClose}>Crew</NavLink>
          <NavLink linkNumber={3} href='/technologies' onClick={handleClose}>Technology</NavLink>
        </ul>
      </nav>

      <div className='navbar__menu-button' onClick={handleMenuClick}>
        {open ? <img src="/img/shared/icon-close.svg" alt="Close Menu Button" /> : <img src="/img/shared/icon-hamburger.svg" alt="Menu Button" />}
      </div>
    </header>
  )
}

export default Navbar