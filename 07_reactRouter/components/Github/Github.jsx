/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //         fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    //     }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 0' }}>
            <img src={data.avatar_url} alt="Git Picture" width={300} />
            <div className='text-3xl text-center text-blue-500 bg-white'>
                Username: {data.name}
            </div>
            <div className='text-3xl text-center text-green-500 bg-white'>
                Github Followers: {data.followers}
            </div>
            <div className='text-3xl text-center text-red-500 bg-white'>
                Location: {data.location}
            </div>
            <div className='text-3xl text-center text-purple-500 bg-white'>
                Joined Github: {new Date(data.created_at).toLocaleDateString()}
            </div>
            <div className='text-3xl text-center text-orange-500 bg-white'>
                Public Repos: {data.public_repos}
            </div>
        </div>
    )
}

export default Github
