import React from 'react'

type TopSectionProps = React.HTMLProps<HTMLDivElement>

const TopSection: React.FC<TopSectionProps> = ({ children, className, ...rest }) => {

  const topSectionClasses = [
    'top-section',
    className || ''
  ]

  return (
    <div {...rest} className={topSectionClasses.join(' ')}>{children}</div>
  )
}

export default TopSection