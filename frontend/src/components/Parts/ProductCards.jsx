import React from 'react'
import Button from './Button.jsx'

const ProductCards = () => {
  return (
    <div className='product-cards'>
        <p className="browser-warning">
            If this looks wonky to you it's because this browser doesn't support the CSS property 'aspect-ratio'.
        </p>
        <div className="stack">
            <div className="card">
                <div className="image"></div>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCards