import React from 'react'
import {LocationEdit, UserCheck} from 'lucide-react'
const Navbar = () => {
  return (
    <div>
        <div className='nav'>
            <div className='nav-div'>
              <a href="/">Home</a>
              <a href="#">Combos
                  <span>WOW</span>
              </a>
              <a href='/admin-work-board'>WorkBoard</a>
            </div>

        </div>
    </div>
  )
}
export default Navbar