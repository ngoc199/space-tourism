import React from 'react'
import './Grid.scss'

type GridProps = {}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className='row'>{children}</div>
  )
}

export default Grid