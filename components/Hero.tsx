import React from 'react'
import heroImg from '../public/heroImg.svg'

function Hero() {
  return (
    <div>
        {/* right size */}
        <div className=''>
            <div className="">
                <h1 className=''>Your work deserves to be discovered.</h1>
                <h2 className=''>web developer. designer. </h2>
                <h4 className=''>my work </h4>
            </div>          
            
            <div className=''>
                <img className="" src="heroImg.svg"></img>
            </div>
        </div>
    </div>
  )
}

export default Hero