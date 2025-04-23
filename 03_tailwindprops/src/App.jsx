/* eslint-disable no-unused-vars */
import './App.css'
import Cards from './components/Cards'

function App() {

  let user = {
    username: "Chai",
    password: "Tea",
  }

  let newwwwArray = [1,2,3,4,5,6,7,8,9,10]

  return (
  <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl cursor-pointer'>Chai aur tailwind</h1>

    <Cards username="chaiorcode" btntext="Click me to Send"  />
    </>
  )
}

export default App
