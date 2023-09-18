import React from 'react'
import { Star } from 'lucide-react'
import "./listCard.css"
const ListCard = ({props}) => {
    
  return (
    <div className='card'>
        <div className='image'>
            <img src={props.image} alt='personimage'/>
        </div>
        
        <div className='developerName'>
            {props.name}
        </div>
        
        <div className='description'>
            <p>
                Description:
            </p>
            <div className='decription-text'>
                {props.description}
            </div>
            
        </div>
        <hr class="dotted"/>
        <div className='rating'>
            <div className= 'rating-icon'>
                <Star size={30}/>
                
            </div>
            {props.rating}

        </div>
        
    </div>
  )
}

export default ListCard