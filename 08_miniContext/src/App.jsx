import './App.css'
import Card from './Card'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className='text-blue-600 text-4xl h-40 flex items-center justify-center'>Mini Context</div>
      < Login/>
      < Profile/>
    </UserContextProvider>
  )
}

export default App
