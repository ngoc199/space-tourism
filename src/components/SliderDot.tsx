import React from 'react'

type SliderDotProps = {
  onClick: (...args: any) => void
  active?: boolean
}

const SliderDot: React.FC<SliderDotProps> = ({ active, onClick, ...rest }) => {
  return (
    <div className={'slider-dot ' + (active ? 'slider-dot--active' : '')} onClick={onClick} ></div>
  )
}

SliderDot.defaultProps = {
  active: false
}

export default SliderDot