import React from 'react'
import bgImage from '../assets/ssss.jpg' 

const SectioBar = () => {
  return (
    <div
      className="h-[500px]   w-100 bg-cover 
      bg-center
       bg-no-repeat"

      style={{ backgroundImage: 
        
        `url(${bgImage})` }}
    > </div>
  )
}

export default SectioBar