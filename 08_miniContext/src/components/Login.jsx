import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center bg-lime-100 shadow-md rounded-md p-8 mt-10'>
            <h1 className='text-4xl text-orange-600'>Login</h1>
            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'
            className='text-2xl outline-none border-b-2 border-blue-500 focus:border-blue-700 mb-4'
             />
            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password' 
            className='text-2xl outline-none border-b-2 border-blue-500 focus:border-blue-700 mb-4'/>
            <button onClick={handleSubmit} className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-purple-600 border-b-emerald-500 hover:border-b-2 hover:border-b-pink-700'
            >Submit</button>
        </div>
        </div>
    )
}

export default Login
