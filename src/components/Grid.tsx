import React from 'react'
import './Grid.scss'

type GridProps = React.HTMLProps<HTMLDivElement> & {}

const Grid: React.FC<GridProps> = ({ children, ...rest }) => {
  return (
    <div {...rest} className='row'>{children}</div>
  )
}

export default Grid