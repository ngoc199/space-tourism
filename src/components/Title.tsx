import React from 'react'

type TitleProps = {
  titleNumber?: number
}

const Title: React.FC<TitleProps> = ({ children, titleNumber }) => {
  return (
    <h5 className='title text-heading-5 text--light text--uppercase text--center text-tablet--left'>
      {titleNumber !== undefined && <span className='title__number'>{titleNumber.toString().padStart(2, '0')}</span>}
      {children}
    </h5>
  )
}

export default Title