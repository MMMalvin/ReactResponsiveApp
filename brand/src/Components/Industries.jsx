import React from 'react'
import Heading from './Heading'
import styles from '../style'
import { companies } from '../constants'

const Industries = () => {
  return (
    <div>
      <Heading headingText={'You’ll be in good company'}/>
      <p className={`w-screen text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${styles.paddingY} font-bold`}> Trusted by leading brands </p>
      <div className='grid grid-cols-5 grid-rows-3 space-x-3 space-y-3'>
          {companies.map((company) => (
              <img key={company.id} src={company.url}/>
          ))}
      </div>
    </div>
  )
}

export default Industries
