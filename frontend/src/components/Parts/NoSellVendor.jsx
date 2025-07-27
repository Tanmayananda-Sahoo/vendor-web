import React from 'react'
import NoSellCards from './NoSellCards'

const NoSellVendor = () => {
  return (
    <div className='no-sell-vendor'>
        <h1>Why are you not selling now ??</h1>
        <NoSellCards className='firstCard' title='1. Bad Quality Products' para='Bad quality raw materials compromise the taste, safety, and appearance of street food, leading to customer complaints, health risks, and a decline in sales and vendor credibility over time.'/>
        <NoSellCards className='secondCard' title='2. High Price of Materials' para='Poor quality raw materials significantly impact street food vendors by reducing food taste, causing customer dissatisfaction, and leading to decreased sales, damaged reputation, and loss of repeat business.'/>
    </div>
  )
}

export default NoSellVendor