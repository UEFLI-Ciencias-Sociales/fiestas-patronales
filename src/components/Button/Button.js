import React from 'react'
import classnames from 'classnames'

export default function Button({children, className, block, ...props}) {
  const classes = classnames(
    'btn',
    {
      'block': block
    },
    className
  )
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
