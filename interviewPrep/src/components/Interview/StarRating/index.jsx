import React, { useState } from 'react'
import Star from './Star'

const StarRating = () => {

   const [starRating, setStarRating] = useState(0);
   const [tempRating, setTempRating] = useState(0);

    const handleRating = (rating) => {
        setStarRating(rating)
    }

  return (
    <div>
        <h1>Star Rating</h1>
        {Array.from({length:5},(_,i)=> 
        <Star onClick={()=>handleRating(i+1)} key={i} full={(tempRating ? tempRating : starRating)>i} 
        onMouseEnter={()=>setTempRating(i+1 )} onMouseLeave={()=>setTempRating(0)}/>)}
    </div>
  )
}

export default StarRating