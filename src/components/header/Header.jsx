import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import Profile from './Profile'
import NavToggle from './NavToggle'
import Container from '../Container'
import ToggleTheme from './ToggleTheme'

const Header = () => {
const [navbtn, setNavbtn]=useState(false)
  const navToggle = (toggle)=>{
    setNavbtn(!navbtn);
  }
  useEffect(()=>{
    window.addEventListener('resize',()=>(setNavbtn(false)))
  },[])

  return (
    <header id='myClass' className='w-full relative'>
      <Container>
        <div className='flex justify-between items-center bg-white h-16 dark:bg-primary-dark transition-colors duration-200'>
      <Logo />
      <Navigation navbtn={navbtn}/>
      <div className='flex gap-1 justify-center items-center'>
        <ToggleTheme />
      <NavToggle  toggle={navToggle} navbtn={navbtn}/>
      <Profile />
      </div>
      </div>
      </Container>
    </header>
  )
}

export default Header