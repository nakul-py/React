import { useState, useCallback } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [allowNum, setAllowNum] = useState(false)
  const [allowChar, setAllowChar] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (allowNum) chars += '0123456789'
    if (allowChar) chars += '!@#$%^&*()+-<>?_=~'

    let password = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      password += chars[randomIndex]
    }
    setPassword(password)
  }, [length, allowNum, allowChar])
  const handleLengthChange = (e) => {
    setLength(e.target.value)
  }
  const handleAllowNumChange = (e) => {
    setAllowNum(e.target.checked)
  }
  const handleAllowCharChange = (e) => {
    setAllowChar(e.target.checked)
  }
  const handleGenerateClick = () => {
    passwordGenerator()
  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(password)
    alert('Password copied to clipboard')
  }
  const handleResetClick = () => {
    setLength(8)
    setAllowNum(false)
    setAllowChar(false)
    setPassword('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    passwordGenerator()
  }

  return (
    <>
      <h1 className="text-5xl py-10 text-center text-white">Password Generator</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="text-white">
          Length:
          <input
            type="number"
            value={length}
            onChange={handleLengthChange}
            min="1"
            max="20"
            className="ml-2 p-1 rounded"
          />
        </label>
        <label className="text-white">
          Allow Numbers:
          <input
            type="checkbox"
            checked={allowNum}
            onChange={handleAllowNumChange}
            className="ml-2"
          />
        </label>
        <label className="text-white">
          Allow Special Characters:
          <input
            type="checkbox"
            checked={allowChar}
            onChange={handleAllowCharChange}
            className="ml-2"
          />
        </label>
        <button
          type="button"
          onClick={handleGenerateClick}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Generate Password
        </button>
        <button
          type="button"
          onClick={handleCopyClick}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Copy Password
        </button>
        <button
          type="button"
          onClick={handleResetClick}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Reset
        </button>
        <div className="mt-4 text-white">
          Generated Password: <strong>{password}</strong>
        </div>
      </form>
    </>
  )
}

export default App
