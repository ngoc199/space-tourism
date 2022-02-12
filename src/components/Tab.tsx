import React from 'react'

type TabProps = {
  onClick: (...args: any) => void
  active?: boolean
}

const Tab: React.FC<TabProps> = ({ children, active, onClick }) => {
  return (
    <div className={'text-nav text--light text--uppercase tab ' + (active ? 'tab--active' : '')} onClick={onClick}>{children}</div>
  )
}

Tab.defaultProps = {
  active: false
}

export default Tab