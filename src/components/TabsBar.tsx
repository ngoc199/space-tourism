import React from 'react'
import Tab from './Tab'

type TabsBarProps = {
  items: Array<{
    text: string
    value: any
  }>
  onSelect: (value: any) => void
}

const TabsBar: React.FC<TabsBarProps> = ({ items, onSelect }) => {

  const [currentValue, setCurrentValue] = React.useState(items[0].value)

  const handleSelect = (value: any) => {
    setCurrentValue(value)
    onSelect(value)
  }

  return (
    <div className='flex flex-row justify-content-center justify-content-desktop-start mt-6 tabs'>
      {items.map(item => (<Tab key={item.value} active={item.value === currentValue} onClick={() => handleSelect(item.value)}>{item.text}</Tab>))}
    </div>
  )
}

export default TabsBar