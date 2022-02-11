import React from 'react'
import './Container.scss'

type ContainerProps = React.HTMLProps<HTMLDivElement> & {
  fluid?: boolean
}

const Container: React.FC<ContainerProps> = ({ fluid, children, ...rest }) => {
  return (
    <div {...rest} className={fluid ? 'container-fluid' : 'container'}>{children}</div>
  )
}

Container.defaultProps = {
  fluid: false
}

export default Container