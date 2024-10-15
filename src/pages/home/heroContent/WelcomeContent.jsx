import React from 'react'

const WelcomeContent = ({ fullName }) => {

  return (
    <div className="lg:w-3/5 py-0 lg:py-8 flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0 relative">
      <div>
        <img src="dots.png" alt="" className="absolute top-28 -left-32 w-52 -z-20 opacity-30 rotate-180" />
      </div>
      {/* bg image ends  */}
      <h1
        className="text-4xl md:text-6xl font-bold  text-primary-text-heading dark:text-white tracking-tight"
        data-aos='fade-right'
      >
        <div className='flex flex-col justify-center items-center lg:block'>
          <div >Hey!, <strong className="text-4xl md:text-6xl text-primary capitalize underline">{fullName.split(' ')[0]}</strong></div>
          <div className="text-3xl md:text-5xl w-[90%] lg:w-[70%]">Welcome back, Pick up where you left off.</div>
        </div>
      </h1>
      <p
        className="text-lg font-medium md:text-xl  text-primary-text-normal dark:text-primary-text-normal-dark"
        data-aos='fade-right'
      >
        Online learning and teaching marketplace with 5K+ courses & 10M
        students. Taught by experts to help you acquire new skills.
      </p>
    </div>
  )
}

export default WelcomeContent