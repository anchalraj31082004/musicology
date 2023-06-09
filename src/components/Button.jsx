import React from 'react'

const Button = (props) => {
  return (
    <div className={`py-1 px-4 w-fit bg-[${props.bg}] rounded-md border`}>
      <button>{props.text}</button>
    </div>
  )
}

export default Button
