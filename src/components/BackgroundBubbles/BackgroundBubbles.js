import React from 'react'

export default function BackgroundBubbles({ className, children }) {
  return (
    <div className={className}>
      <div className='BackgroundBubbles-up'>
        {[...Array(8).keys()].map(item => <div key={item} className='BackgroundBubbles__bubble' />)}
      </div>
      {children}
      <div className='BackgroundBubbles-down'>
        {[...Array(8).keys()].map(item => <div key={item} className='BackgroundBubbles__bubble' />)}
      </div>
    </div>
  )
}
