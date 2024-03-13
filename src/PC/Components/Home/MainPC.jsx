import React from 'react'
import Reklam from './Reklam'
import Film from './Film'

function MainPC() {
  return (
    <div className='w-full bg-black pt-5'>
        <div className='containercss flex justify-between'>
            <Film/>
            <Reklam/>
        </div>
    </div>
  )
}

export default MainPC