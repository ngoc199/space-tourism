import React from 'react'

type TabProps = {
  active?: boolean
}

const Tab: React.FC<TabProps> = ({ children, active }) => {
  return (
    <div className={'text-nav text--white text--uppercase tab ' + (active ? 'tab--active' : '')}>{children}</div>
  )
}

Tab.defaultProps = {
  active: false
}

export default Tab