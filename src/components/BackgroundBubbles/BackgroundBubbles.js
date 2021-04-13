import React from 'react'

export default function BackgroundBubbles({ className, children }) {
  return (
    <div className={className}>
      {children}

      <div className='BackgroundBubbles'>
        {[...Array(8).keys()].map(item => <div key={item} className='BackgroundBubbles__bubble' />)}
      </div>
    </div>
  )
}
