import React from 'react'

type GridProps = React.HTMLProps<HTMLDivElement>

const Grid: React.FC<GridProps> = ({ children, className, ...rest }) => {

  const gridClasses = [
    'row',
    className || ''
  ]

  return (
    <div {...rest} className={gridClasses.join(' ')}>{children}</div>
  )
}

export default Grid