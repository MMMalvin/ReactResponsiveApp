// this functional component is used to create the Headings for the different sections
import React from 'react'

const Heading = ({headingText, color}) => { // I pass the heading text and color to create different headings with either white/black
  return (
    <div className="flex items-center">
      <img src="./src/assets/Rectangle.svg" className="" />
      <p className={`text-${color ? 'white' : 'black'} ml-4`}>
        {headingText}
      </p>
    </div>
  )
}

export default Heading
