import React from 'react'
import './Screen.css'

const Screen = ({numb}) => {
  return (
    <div className="display">
        <div className='screen'>
            <div className="calculations">{numb}</div>
        </div>
    </div>
  )
}

export default Screen