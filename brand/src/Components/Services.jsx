// this component is used to render the Services Section
import React from 'react'
import Heading from './Heading'
import ServiceCard from './SeviceCard'
import { services } from '../constants'
import styles from '../style'

const Services = () => {
  return (
    <div className='mb-20'>
      <Heading headingText={'What we do'}/>
      <p className={`w-screen text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${styles.paddingY} font-bold`}>We offer a complete range of bespoke design and<br/>development services to help you turn your ideas into<br/>digital masterpieces</p>
      <div className="grid grid-cols-4 space-x-5"> {services.map((service) => (
        <ServiceCard key={service.id} url={service.url} title={service.title} body={service.body}/> // this loops through the list and creates the various card component using the ServiceCard component
      ))} </div>
    </div>
    
  )
}

export default Services
