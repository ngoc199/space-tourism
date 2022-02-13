import React from 'react'

type SliderCircleButtonProps = {
  active?: boolean
  onClick: (value: any) => void
}

const SliderCircleButton: React.FC<SliderCircleButtonProps> = ({ children, active, onClick }) => {
  return (
    <button className={'slider-circle-button ' + (active ? 'slider-circle-button--active' : '')} onClick={onClick}>{children}</button>
  )
}

SliderCircleButton.defaultProps = {
  active: false
}

export default SliderCircleButton