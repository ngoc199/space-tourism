import React from 'react'

type SliderCircleButtonProps = {
  active?: boolean
}

const SliderCircleButton: React.FC<SliderCircleButtonProps> = ({ children, active }) => {
  return (
    <button className={'slider-circle-button ' + (active ? 'slider-circle-button--active' : '')}>{children}</button>
  )
}

SliderCircleButton.defaultProps = {
  active: false
}

export default SliderCircleButton