import React from 'react'
import ItemsCard from '../Parts/ItemsCard'
import Navbar from '../Parts/Navbar'
import { CircleArrowRight } from 'lucide-react'
const AdminWorkBoard = () => {
  return (
    <div className='admin-work-board'>
        <div className='admin-work-board-content'>
            <h1>Explore Recent Products... <CircleArrowRight /></h1>
            <div className='admin-work-board-items'>
              <ItemsCard />
              <ItemsCard />
              <ItemsCard />
              <ItemsCard />
              <ItemsCard />
              <ItemsCard />
              <ItemsCard />
              <ItemsCard />
              <ItemsCard />
              <ItemsCard />
            </div>
        </div>
    </div>
  )
}

export default AdminWorkBoard