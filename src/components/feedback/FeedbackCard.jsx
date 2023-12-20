import { faFaceSmile, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FeedbackCard = ({className=''}) => {
  return (
    <div className={`flex flex-col gap-2  justify-center items-center px-4 py-8 dark:bg-card-dark-bg dark:text-white rounded-lg ${className}`}>        
        <FontAwesomeIcon icon={faFaceSmile} className='w-10 h-10 rounded-full '/>
        <p className={`my-2 text-center text-sm text-primary-text-normal dark:text-primary-text-normal-dark`}> Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing </p>
        <div className="flex gap-1">
         

          <FontAwesomeIcon icon={faStar} className='text-primary-yellow text-sm'/>
          <FontAwesomeIcon icon={faStar} className='text-primary-yellow text-sm'/>
          <FontAwesomeIcon icon={faStar} className='text-primary-yellow text-sm'/>
          <FontAwesomeIcon icon={faStar} className='text-primary-yellow text-sm'/>
          <FontAwesomeIcon icon={faStar} className='text-primary-yellow text-sm'/>
        </div>
        
        <h3 className='font-bold '>Umar Khan</h3>
        
    </div>
  )
}

export default FeedbackCard