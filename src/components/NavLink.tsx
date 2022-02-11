import React from 'react'
import { Link } from 'react-router-dom'
import './NavLink.scss'

type NavLinkProps = {
  href: string
  active?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ active, children, href }) => {
  return (
    <li className={'text-nav nav__item text--light ' + (active ? 'nav__item--active' : '')}>
      <Link to={href}>{children}</Link>
    </li>
  )
}

NavLink.defaultProps = {
  active: false
}

export default NavLink