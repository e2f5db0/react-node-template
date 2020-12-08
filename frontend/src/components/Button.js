import React from 'react'

const Button = ({ type, text, handleClick }) => {
    return (
        <div>
            <button className={type} onClick={() => handleClick()}>{text}</button>
        </div>
    )
}

export default Button
