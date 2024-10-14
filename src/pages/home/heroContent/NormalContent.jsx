import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from '../../../components'
import { Link } from 'react-router-dom'

const NormalContent = () => {
  return (
    <div className="lg:w-3/5 py-8  flex flex-col gap-8 justify-center items-center text-center lg:text-left lg:items-start md:py-0 relative">
      <div>
        <img src="dots.png" alt="" className="absolute top-28 -left-32 w-52 -z-20 opacity-30 rotate-180" />
      </div>
      <h1
        className="text-4xl md:text-6xl font-bold  text-primary-text-heading dark:text-white"
        data-aos='fade-right'
      >
        Explore Boundless Learning Anytime, Anywhere
      </h1>
      <p
        className="text-lg font-medium md:text-xl  text-primary-text-normal dark:text-primary-text-normal-dark"
        data-aos='fade-right'
      >
        Online learning and teaching marketplace with 5K+ courses & 10M
        students. Taught by experts to help you acquire new skills.
      </p>
      {/* discription ends  */}
      <div
        className="flex gap-4"
        data-aos='fade-right'
        data-aos-delay='100'
      >
        <div className="flex gap-1 items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="dark:text-white" />
          <span className="text-primary-text-normal font-medium dark:text-primary-text-normal-dark">
            Learn with experts
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="dark:text-white" />
          <span className="text-primary-text-normal font-medium dark:text-primary-text-normal-dark">
            Get certificate
          </span>
        </div>

        <div className="flex gap-1 items-center">
          <FontAwesomeIcon icon={faCheckCircle} className="dark:text-white" />
          <span className="text-primary-text-normal font-medium dark:text-primary-text-normal-dark">
            Get membership
          </span>
        </div>
      </div>

      <Link
        to="/login"
        data-aos='fade-up'
      >
        <Button>Get Started</Button>
      </Link>
    </div>
  )
}

export default NormalContent