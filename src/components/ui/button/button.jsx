import React, { useState } from 'react'
import './button.css'
const Button = ({label,...buttonProps}) => {

  const [selected,changeSelected]=useState(true)
  return (
    <div className='form'>
        <button className='button' {...buttonProps}>
          {label}
        </button>
        
        
        

    </div>
  )
}

export default Button