import React from 'react'
import { Link, To, useMatch, useResolvedPath } from 'react-router-dom'

type NavLinkProps = React.HTMLProps<HTMLLIElement> & {
  active?: boolean
  linkNumber?: number
  to: To
}

const NavLink: React.FC<NavLinkProps> = ({ linkNumber, children, to, ...rest }) => {

  const resolved = useResolvedPath(to)
  const matched = useMatch({ path: resolved.pathname, end: true })

  return (
    <li {...rest} className={'text-nav nav__item text--light ' + (matched ? 'nav__item--active' : '')}>
      <Link to={to}>
        <span className='nav__item__number'>{linkNumber !== undefined && linkNumber.toString().padStart(2, '0')}</span>
        {children}
      </Link>
    </li>
  )
}

NavLink.defaultProps = {
  active: false
}

export default NavLink