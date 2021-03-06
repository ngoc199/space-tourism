import React from 'react'

type ButtonProps = {}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='text-heading-4 text--uppercase button'>{children}</button>
  )
}

export default Button