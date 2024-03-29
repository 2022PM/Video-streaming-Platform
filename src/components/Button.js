import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='m-2 px-5 py-1 bg-gray-300 rounded text-black'>{name}</button>
    </div>
  )
}

export default Button