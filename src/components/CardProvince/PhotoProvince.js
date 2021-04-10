import React from 'react'
import classnames from 'classnames'

export default function PhotoProvince({province, leftImage, rightImage}) {
  // ClassNames
  const imageClasses = 'h-full w-full object-cover'
  const classes = classnames(
    'h-64 md:w-3/5 overflow-hidden rounded-2xl md:mx-0 mx-auto',
    'mt-6 md:mt-0',
    {
      'md:mr-8': leftImage,
      'md:ml-8': rightImage,
    }
  )
  
  
  const image = leftImage || rightImage;

  return (
    <div className={classes}>
        <img
          className={imageClasses}
          src={image}
          alt={`Imagen de ${province}`}
        />
      </div>
  )
}
