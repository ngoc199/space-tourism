import React from 'react'
import './Container.scss'

type ContainerProps = {
  fluid?: boolean
}

const Container: React.FC<ContainerProps> = ({ fluid, children }) => {
  return (
    <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>
  )
}

Container.defaultProps = {
  fluid: false
}

export default Container