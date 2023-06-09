import React from 'react'

const Button = (props) => {
  return (
    <div className={`py-1 px-4 text-white bg-[${props.bg}] rounded-md`}>
      <button>{props.text}</button>
    </div>
  )
}

export default Button
