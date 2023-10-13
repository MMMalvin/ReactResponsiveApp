import React from 'react'
import Heading from './Heading'
import { contacts } from '../constants'

const Contact = () => {
  return (
    <footer className='grid grid-rows-3 -py-15'>
      <Heading headingText={'Contact'} color={true}/>
      <div className='grid grid-cols-2'>
        <h1 className=' font-bold text-white w-fit text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' >Have a project in mind?<br/>Let's make it happen</h1>
        <h5 className=' col-start-2 font-light text-white w-fit text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' >22 Street Name, Suburb, 8000,<br/>
          Cape Town, South Africa<br/>
          +27 21 431 0001<br/>
          <a href='#' className='underline'>enquirie@website.co.za</a></h5>
          <div className='mt-10 font-light text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl grid grid-cols-5 col-span-2'>
          {contacts.map((items) => (
    <div key={items.id}>
      {items.id === 15 ? (
        <>&copy; {items.name}</>
      ) : 
        <>{items.name}</>
      }
    </div>
  ))}
          </div>
      </div>
    </footer>
  )
}

export default Contact
