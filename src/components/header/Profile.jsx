import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

const Profile = () => {
  const [profile, setProfile]=useState(false);
  let profileRef=useRef();
  const profileItem=[
    {name:'Edit Profile', slug:'#'},
    {name:'My Courses', slug:'#'},
    {name:'Sign Out', slug:'#'},
  ]
  if(profile)
  { 
    var className='block'    
  }
  else{
    var className='hidden'
  }
  useEffect(()=>{
    const handler=(e)=>{
      if(!profileRef.current.contains(e.target)){
        setProfile(false);
        
      }
      
    }
    if(profile){

      document.addEventListener('mousedown', handler)
    }
    return()=>{
      document.removeEventListener('mousedown',handler)
    }
  })
  return (
      <section  ref={profileRef} className="relative">
        <div className=" bg-primary rounded-full w-10 h-10 justify-center items-center cursor-pointer hover:opacity-80 "
        onClick={()=>setProfile(!profile)}
        >
          <FontAwesomeIcon icon={faFaceSmile}  className="w-full h-full  bg-primary text-white rounded-full"/>       
        </div>

        {/* profile contents starts  */}

        <div 
         
          className={`lightShadow w-64 rounded-lg py-4 px-2 absolute top-14 right-0 bg-white z-50 ${className} dark:bg-black 
          `}
        >
          <div className="absolute -top-2 right-3 w-4 h-4 bg-white rotate-45 dark:bg-black"></div>
          {/* before ends */}

          {/* profile header starts  */}
        <div className="flex gap-3 px-3"> 
          <div className="overflow-hidden w-10 h-10 rounded-full">
          <FontAwesomeIcon icon={faFaceSmile}  className="w-full h-full  bg-primary text-white "/>       
          </div>
          <div className="">
            <h2 className="font-bold dark:text-white">Umar Khan</h2>
            <p className="font-normal text-xs dark:text-primary-grayText">umerkhan5727@gmail.com</p>
          </div>
        </div>
        {/* profile header ends  */}
        <hr className="mt-4 mb-2 "/>
        <ul className="">
          {
            profileItem.map((item)=>(
              
              <li key={item.name} className=" rounded-lg font-medium text-primary-grayText">
                <a href={item.slug} className="inline-block w-full px-4 py-2 hover:bg-primary-light hover:text-primary dark:hover:bg-primary-dark-hover transition-all duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faFaceSmile} className="me-2"/>
                  {item.name}
                  </a>
              </li>
            ))
          }
          
        </ul>
          </div>
      </section>
      
    )     
    
};

export default Profile;
