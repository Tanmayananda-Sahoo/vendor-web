import { LocationEdit } from 'lucide-react'
import React from 'react'

const ItemsCard = () => {
  return (
     <div className="card">
    <div className="card-img"></div>
    <div className="card-info">
        <p className="text-title">Product title </p>
        <p className="text-body"><LocationEdit />Location</p>
    </div>
    <div className="card-footer">
    <span className="text-title">499.49</span>
    </div></div>
  )
}

export default ItemsCard