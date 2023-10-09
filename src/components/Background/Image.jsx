import React from 'react'
import './Image.css'
const Image = (props) => {
  return (
    <div className="image-container">
            <img className='BackImage' src='/backImage.jpeg' alt='Background'/>
            <div className="image-text">"{props.text}"</div>
    </div>
  )
}

export default Image