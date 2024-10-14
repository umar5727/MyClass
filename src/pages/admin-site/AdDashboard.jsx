import React from 'react'
import { SmallCard } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faClipboardCheck, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons'

const cardList = [
  {
    title: 'Crouses',
    number: 15,
    numberSpan: '',
    className: 'bg-primary-yellow-light',
    icon: faBook,
    iconClassName: 'text-6xl text-primary-yellow'
  },
  {
    title: 'Instructors',
    number: 5,
    numberSpan: '',
    className: 'bg-primary-purple-light',
    icon: faUserTie,
    iconClassName: 'text-6xl text-primary-purple'
  },
  {
    title: 'Students',
    number: 40,
    numberSpan: '',
    className: 'bg-primary-light',
    icon: faUser,
    iconClassName: 'text-6xl text-primary'
  },
  {
    title: 'Total Enrolls',
    number: 6,
    numberSpan: '',
    className: 'bg-primary-info-light',
    icon: faClipboardCheck,
    iconClassName: 'text-6xl text-primary-info'
  },
]
const AdDashboard = () => {
  return (
    <section>
      <div className='grid grid-cols-4 gap-4'>
        {
          cardList?.map((field) => (
            <SmallCard
              title={field.title}
              number={field.number}
              numberSpan={field.numberSpan}
              className={field.className}
            >
              <FontAwesomeIcon icon={field.icon} className={field.iconClassName} />
            </SmallCard>
          ))
        }

      </div>
    </section>
  )
}

export default AdDashboard