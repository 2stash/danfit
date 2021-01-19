import React from 'react'

const Button = (props) => {
  return (
    <button className={`inline-block px-5 py-3 text-sm text-white rounded-lg uppercase tracking-wider font-semibold ${props.styles}`}>
      {props.children}
    </button>
  )
}

export default Button
