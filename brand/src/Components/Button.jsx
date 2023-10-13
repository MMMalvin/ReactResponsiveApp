import React from 'react'

const Button = ({buttonText, primaryColor, secondaryColor}) => {
  return (
    <div>
      <button className={`${primaryColor} text-[${secondaryColor}] text-xs py-2 px-4 rounded-full`}>
        {buttonText}
      </button>
    </div>
  )
}

export default Button
