
import React from 'react'
import NormalContent from './NormalContent'
import { useSelector } from 'react-redux'
import WelcomeContent from './WelcomeContent'


const HeroContent = () => {
  const user = useSelector((state) => state.auth.userData)
  return (
    <>
      {
        user ?
          <WelcomeContent fullName={user.fullName} />
          :
          <NormalContent />

      }
    </>

  )
}

export default HeroContent