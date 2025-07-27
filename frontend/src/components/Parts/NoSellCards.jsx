import React from 'react'

const NoSellCards = (props) => {
  return (
    <div className={`no-sell-cards ${props.className}`}>
        <h3>
            {props.title}
        </h3>
        <p>{props.para}</p>
    </div>
  )
}

export default NoSellCards