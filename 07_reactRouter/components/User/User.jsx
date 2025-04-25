import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className='flex flex-col justify-center items-center bg-amber-50'
        >User: {userid}</div>
    )
}

export default User
