import React from 'react'

function Button({
    text,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'white',
    className= '',
    ...props
}) {
    return (
        <button className={` px-4 py-2 rounded-lg ${type} ${bgColor} ${textColor} ${className}`} {...props}>
            {text}
        </button>
    )
}

export default Button
