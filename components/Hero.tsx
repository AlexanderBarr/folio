import React from 'react'
import heroImg from '../public/heroImg.svg'

function Hero() {
  return (
    <div>
        {/* right size */}
        <div className='flex flex-col flex-wrap justify-between bg-background my-20 pl-7 w-screen '>
            <div className="text-whitish">
                <h1 className='text-6xl'>Your work deserves to be discovered.</h1>
                <h2 className='text-3xl'>web developer. designer. </h2>
                <h4 className='text-xl'>my work </h4>
            </div>          
            
            <div className='ml-auto mr-0'>
                <img className="w-auto h-96" src="heroImg.svg"></img>
            </div>
        </div>
    </div>
  )
}

export default Hero