import React from 'react'

export default function Loading() {
  return (
    <div className='loading'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
        <div className='loading-child' key={item} />
      ))}
    </div>
  )
}
