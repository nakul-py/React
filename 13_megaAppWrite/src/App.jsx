import './App.css'

function App() {

  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <p className='flex flex-col items-center text-9xl text-white font-bold justify-center min-h-screen p-4 bg-gray-600'>
        Appwrite
      </p>
    </>
  )
}

export default App
