import React from 'react'

export default function Loading() {
  return (
    <div className='loading'>
      {[...Array(9).keys()].map(item => (
        <div className='loading-child' key={item} />
      ))}
    </div>
  )
}
