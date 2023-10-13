import React from 'react'

const SeviceCard = ({url, title, body}) => {
  return (
    <div className='space-y-8'>
      <div><img src={url}/></div>
      <div className="font-bold w-fit text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"> {title} </div>
      <div className=""> {body} </div>
    </div>
  )
}

export default SeviceCard
