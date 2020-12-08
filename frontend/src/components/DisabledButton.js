import React from 'react'

const DisabledButton = ({ type, text, handleClick }) => {
    return (
        <div>
            <button disabled className={type} onClick={() => handleClick()}>{text}</button>
        </div>
    )
}

export default DisabledButton
