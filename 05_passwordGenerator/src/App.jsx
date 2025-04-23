import { useState, useCallback, useEffect, useRef} from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [allowNum, setAllowNum] = useState(false)
  const [allowChar, setAllowChar] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)
  const copyToClipboard = useCallback(() => {
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0, 16)
    navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (allowNum) string += "0123456789"
    if (allowChar) string += "!@#$%^&*()`_-+=~"

    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * string.length)
      pass += string.charAt(random)
    }

    setPassword(pass)
  },[length, allowNum, allowChar,setPassword])


  useEffect(() => {
    passwordGenerator()
  }
  , [length, allowNum, allowChar, passwordGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto bg-gray-800 font-bold py-3 px-4 my-8 rounded-lg shadow-md'>
        <h1 className='text-white text-center my-3'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-gray-100 text-black'
          placeholder='Password' 
          readOnly
          ref={passwordRef} />

          <button 
            className='outline-none bg-purple-500 text-white px-3 py-0.5 shrink-5 cursor-grab hover:bg-purple-600'
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min="1"
          max="16"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className='w-full bg-gray-100 cursor-pointer'
           />
           <label className='text-white'>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={allowNum}
            id="numberInput"
            className='cursor-crosshair'
            onChange={() => {
              setAllowNum(!allowNum)
            }} />
            <label className='text-white'>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={allowChar}
            className='cursor-crosshair'
            id="characterInput"
            onChange={() => {
              setAllowChar(!allowChar)
            }} />
            <label className='text-white'>Character</label>
          </div>
        </div>
        <div className='flex justify-center mt-4'>
          <button 
          className='bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 cursor-pointer'
          onClick={passwordGenerator}
          >
            Generate
          </button>
          </div>
      </div>
    </>
  )
}

export default App
