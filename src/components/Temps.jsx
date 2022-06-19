import React from 'react'
import '../styles/Temps.css'

const Temps = ({ value, type, isTemp, offline }) => {
  return (
    <div className={`Temps ${!offline ? "Offline" : ""}`}>
      {value}
      {isTemp && <span className='TempSymbol'>°</span>}
      <span className='TempType'>{type==="celcius" ? "C" : type==="fahrenheit" ? "F" : "%"}</span>
    </div>
  )
}

export default Temps