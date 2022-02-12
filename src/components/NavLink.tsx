import React from 'react'
import { Link } from 'react-router-dom'
import './NavLink.scss'

type NavLinkProps = React.HTMLProps<HTMLLIElement> & {
  href: string
  active?: boolean
  linkNumber?: number
}

const NavLink: React.FC<NavLinkProps> = ({ linkNumber, active, children, href, ...rest }) => {

  return (
    <li {...rest} className={'text-nav nav__item text--light ' + (active ? 'nav__item--active' : '')}>
      <span className='nav__item__number'>{linkNumber !== undefined && linkNumber.toString().padStart(2, '0')}</span>
      <Link to={href}>{children}</Link>
    </li>
  )
}

NavLink.defaultProps = {
  active: false
}

export default NavLink