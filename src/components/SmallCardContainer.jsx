import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTv, faUserGraduate, faUserTie } from "@fortawesome/free-solid-svg-icons";
import SmallCard from './SmallCard';


const SmallCardContainer = () => {
    const cards=[
        {
            className:"bg-primary-yellow-light",
            number:10,
            numberSpan:"K",
            title:"Online Courses",
            iconClassName:"text-primary-yellow  text-6xl",
            iconName:faTv,
            
        },
        {
            className:"bg-primary-purple-light",
            number:60,
            numberSpan:"+",
            title:"Online Students",
            iconClassName:"text-primary-purple text-6xl",
            iconName:faUserTie,
         
        },
        {
            className:"bg-primary-odd-light",
            number:200,
            numberSpan:"+",
            title:"Expert Tutors",
            iconClassName:"text-primary-odd text-6xl",
            iconName:faUserGraduate,
         
            
        },
        {
            className:"bg-primary-info-light",
            number:6,
            numberSpan:"+",
            title:"Certified Courses",
            iconClassName:"text-primary-info text-6xl",
            iconName:faCheckCircle,
           
        }

    ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
        {
            cards.map((item, index)=>(
                <SmallCard 
                className={item.className}
                number={item.number}
                numberSpan={item.numberSpan}
                title={item.title}
                key={index}
                
              >
                <FontAwesomeIcon
                  icon={item.iconName}
                  className={item.iconClassName}
                />
              </SmallCard>
            ))
        }
       
      </div>
  )
}

export default SmallCardContainer