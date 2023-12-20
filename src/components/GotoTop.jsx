import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

const GotoTop = () => {
    const [display, setDisplay] = useState(false)
    
    const handleClick =()=>{
        window.scrollTo({top:0,left:0, behavior:'smooth'})
      
    }
    const scrollHandler=()=>{
        if(document.documentElement.scrollTop >= 300 ){
           
            setDisplay(true)
        }else{
            setDisplay(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',scrollHandler);
        return()=>
            window.removeEventListener('scroll',scrollHandler);

        
        
    },[display])
  return (
    <>
    
    { display && ( 
        <button type='button' 
        onClick={handleClick} 
        className={`lightShadow cursor-pointer w-12 h-12 fixed right-10 bottom-10  transition-all duration-300 bg-primary-light text-primary hover:text-white hover:bg-primary z-50 rounded-lg `}
        >
        <FontAwesomeIcon icon={faArrowUp} />
        </button>
    )
        
    }
    </>
  )
}

export default GotoTop