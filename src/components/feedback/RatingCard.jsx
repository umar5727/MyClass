import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const RatingCard = ({className=''}) => {
  return (
    <div className={`flex flex-col gap-2 justify-center items-center text-center px-8 py-4 rounded-lg dark:bg-primary ${className}`}>
        <div >
        <h2 className='text-2xl font-bold'>4/5</h2>
        <FontAwesomeIcon icon={faStar} className='text-primary-yellow  mr-1 text-sm' />
        <FontAwesomeIcon icon={faStar} className='text-primary-yellow  mr-1 text-sm' />
        <FontAwesomeIcon icon={faStar} className='text-primary-yellow  mr-1 text-sm' />
        <FontAwesomeIcon icon={faStar} className='text-primary-yellow  mr-1 text-sm' />
        </div>
        <p>Based on 3265 ratings</p>
    </div>
  )
}

export default RatingCard