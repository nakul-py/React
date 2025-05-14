import './App.css'
import React,{ useState, useEffect } from 'react'
import { useDispatch} from 'react-redux'
import authService from '../src/appwrite/auth.js'
import {login, logout} from '../src/store/authSlice.js'
import {Header, Footer} from '../src/components/index.js'
import { Outlet } from 'react-router-dom'


function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? ( 
  <div className='min-h-screen flex flex-wrap content-between bg-gray-500 text-center text-2xl font-bold'>
    <div className='w-full block'>
      <Header/>
      <main>
       TODO: <Outlet/>
      </main>
      <Footer/>
    </div>
    </div>) : null
}

export default App
