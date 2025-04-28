import React from 'react'

function Card({username}) {
    return (
        <div className='text-yellow-600 text-4xl h-10 flex items-center justify-center'>{username}</div>
    )
}

export default Card
