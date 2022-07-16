import React from 'react'

function NavBar() {
  return (
    <div className='flex flex-wrap justify-between items-center pl-7 my-7 w-screen bg-background'>
        {/* logo */}
        <div >
            <h1 className='font-quicksand text-whitish text-xl'>alex barr</h1>
        </div>

          {/* right side */}
          <div className=''>
            <ul className='hidden md:flex md:space-x-8  pr-24'>
                <li className="navBarItems">home</li>
                <li className="navBarItems">work</li>
                <li className="navBarItems">skills</li>
                <li className="navBarItems">contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar