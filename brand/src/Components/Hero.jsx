// this component is used to render the Hero
import React from 'react'
import styles from '../style'
import Button from './Button'

const Hero = () => {
  
  return (
  <div className="relative">
    <img src="./src/assets/Hero Image.png" alt="Hero Image" className="w-screen object-cover"/>
    <div className="absolute text-white top-1/2 left-1/4 -translate-x-1/4">
      <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2"> {/* added different sizes for the various different screens*/}
        Live with Confidence
      </p>
      <p className="text-sm sm:text-base mb-2">
        José Mourinho brings confidence to pan-African Sanlam<br/> campaign.
      </p>
      <Button buttonText="View Project" primaryColor="bg-primary" secondaryColor="text-white" />
    </div>
</div>
  )
}

export default Hero
