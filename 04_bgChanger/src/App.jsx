import { useState } from 'react';
import './App.css';

function App() {

  const [bgColor, setBgColor] = useState('lightgrey');

  return (
    <>
    <div className='w-full h-screen duration-200' style={{ backgroundColor: bgColor, outline: '2px solid black' }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button className='outline-none px-8 py-2 rounded-full bg-red-500 text-white cursor-pointer' onClick={() => setBgColor('red')}
          >Red</button>
          <button className='outline-none px-8 py-2 rounded-full bg-green-700 text-white cursor-pointer' onClick={() => setBgColor('green')}
          >Green</button>
          <button className='outline-none px-8 py-2 rounded-full bg-blue-500 text-white cursor-pointer' onClick={() => setBgColor('blue')}
          >Blue</button>
          <button className='outline-none px-8 py-2 rounded-full bg-black text-white cursor-pointer' onClick={() => setBgColor('black')}
          >Black</button>
          <button className='outline-none px-8 py-2 rounded-full bg-purple-500 text-white cursor-pointer' onClick={() => setBgColor('purple')}
          >Purple</button>
          <button className='outline-none px-8 py-2 rounded-full bg-lime-600 text-white cursor-pointer' onClick={() => setBgColor('lime')}
          >Lime</button>
          <button className='outline-none px-8 py-2 rounded-full bg-orange-500 text-white cursor-pointer' onClick={() => setBgColor('orange')}
          >Orange</button>
          <button className='outline-none px-8 py-2 rounded-full bg-yellow-500 text-white cursor-pointer' onClick={() => setBgColor('yellow')}
          >Yellow</button>
          <button className='outline-none px-8 py-2 rounded-full bg-pink-500 text-white cursor-pointer' onClick={() => setBgColor('pink')}
          >Pink</button>
          <button className='outline-none px-8 py-2 rounded-full bg-slate-700 text-white cursor-pointer' onClick={() => setBgColor('grey')}
          >Grey</button>
          <button className='outline-none px-8 py-2 rounded-full bg-teal-500 text-white cursor-pointer' onClick={() => setBgColor('teal')}
          >Teal</button>
          <button className='outline-none px-8 py-2 rounded-full bg-cyan-500 text-white cursor-pointer' onClick={() => setBgColor('cyan')}
          >Cyan</button>
          <button className='outline-none px-8 py-2 rounded-full bg-indigo-500 text-white cursor-pointer' onClick={() => setBgColor('indigo')}
          >Indigo</button>
          <button className='outline-none px-8 py-2 rounded-full bg-amber-500 text-white cursor-pointer' onClick={() => setBgColor('darkorange')}
          >Amber</button>
          <button className='outline-none px-8 py-2 rounded-full bg-sky-500 text-white cursor-pointer' onClick={() => setBgColor('skyblue')}
          >Skyblue</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
