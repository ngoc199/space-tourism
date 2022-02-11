import React from 'react'

type SliderDotProps = {
  active?: boolean
}

const SliderDot: React.FC<SliderDotProps> = ({ active }) => {
  return (
    <div className={'slider-dot ' + (active ? 'slider-dot--active' : '')}></div>
  )
}

SliderDot.defaultProps = {
  active: false
}

export default SliderDot