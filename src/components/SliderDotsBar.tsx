import React from 'react'
import SliderDot from './SliderDot'

type SliderDotsProps = Omit<React.HTMLProps<HTMLDivElement>, 'onSelect'> & {
  items: Array<{
    value: any
  }>
  onSelect: (value: any) => void
}

const SliderDotsBar: React.FC<SliderDotsProps> = ({ items, onSelect, className, ...rest }) => {

  const [currentValue, setCurrentValue] = React.useState(items[0].value)

  const handleSelect = (value: any) => {
    setCurrentValue(value)
    onSelect(value)
  }

  const sliderDotsBarClasses = [
    'flex flex-row justify-content-center justify-content-desktop-start mt-6 slider-dots',
    className || ''
  ]

  return (
    <div {...rest} className={sliderDotsBarClasses.join(' ')}>
      {items.map(item => (<SliderDot key={item.value} active={item.value === currentValue} onClick={() => handleSelect(item.value)} />))}
    </div>
  )
}

export default SliderDotsBar