import React from 'react'
import { useNavigate } from 'react-router-dom';
const Button = (props) => {
const navigate = useNavigate();
  return (
    <button type="submit" className="btn" onClick={() => navigate('/admin-work-board')}>
        {props.title}
    </button>
  )
}

export default Button