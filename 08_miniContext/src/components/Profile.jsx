import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user.username) {
        return  <div className='flex flex-col items-center justify-center'> 
            <div className='text-gray-700 font-bold flex flex-col items-center justify-center bg-lime-400 shadow-md rounded-md p-8 mt-10 text-2xl'>
            Please login
            </div>
            </div>
    }
    return (
        <div className='flex flex-col items-center justify-center' >
        <div className='text-yellow-200 font-bold flex flex-col items-center justify-center bg-pink-600 shadow-md rounded-md p-8 mt-10 text-2xl'>
            <h2>Welcome {user.username} Thanks for login. Your profile is:</h2>
            <p className='text-slate-600'>Username: {user.username}</p>
            <p className='text-zinc-700'>Password: {user.password}</p>
        </div>
        </div>
    )
}

export default Profile
