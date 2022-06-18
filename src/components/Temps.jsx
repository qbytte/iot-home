import React from 'react'
import '../styles/Temps.css'

const Temps = ({ value, type, isTemp }) => {
  return (
    <div className='Temps'>
      {value}
      {isTemp && <span className='TempSymbol'>°</span>}
      <span className='TempType'>{type==="celcius" ? "C" : type==="fahrenheit" ? "F" : "%"}</span>
    </div>
  )
}

export default Temps