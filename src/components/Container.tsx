import React from 'react'
import './Container.scss'

type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  fluid?: boolean
}

const Container: React.FC<ContainerProps> = ({ fluid, children, className, ...rest }) => {

  const containerClassName = [
    fluid ? 'container-fluid' : 'container',
    className || ''
  ].join(' ')

  return (
    <div {...rest} className={containerClassName}>{children}</div>
  )
}

Container.defaultProps = {
  fluid: false
}

export default Container