import React from 'react'
import Heading from './Heading'

const CaseCard = ({url, title, body}) => {
  return (
    <div className="relative">
      <div className="">
        <img src={url} alt="Card Image" className="w-full"/>
      </div>
      <div className="absolute text-white top-1/2 left-1/4 -translate-x-1/4">
        <Heading headingText={''}/>
        <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-6xl mb-2">
          {title}
        </p>
        <p className="text-xs sm:text-sm mb-2">
          {body}
        </p>
      </div>
</div>
  )
}

export default CaseCard
