import { useState } from 'react'
import './App.css'

function App() {

  let [counter, nakulCounter] = useState(5);
  // let counter = 5;

  const addvalue = () => {
    counter = counter + 1;
    nakulCounter(counter);
    console.log(counter);
  }

  const removeValue = () => {
    counter = counter - 1;
    nakulCounter(counter);
    console.log(counter);
  }

  return (
    <>
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '50px' }}>
        <h1 style={{ color: '#f66800', fontSize: '2.5rem', marginBottom: '20px' }}>Chai aur Code</h1>
        <h2 style={{ color:'#00e0f6', fontSize: '1.5rem', marginBottom: '20px' }}>
          Counter value: 
          <div 
            style={{ 
              display: 'inline-block', 
              backgroundColor: '#553643 ', 
              padding: '10px 20px', 
              borderRadius: '5px', 
              fontWeight: 'bold', 
              fontSize: '1.2rem' 
            }}
          >
            {counter}
          </div>
        </h2>

        <button onClick={() => {
          if (counter < 20) {
            addvalue();
          }
          }}> Increase Value </button>
           <br /><br />
        <button onClick={() => {
          if (counter > 0) {
            removeValue();
          }
        }}> Decrease Value </button>
      </div>
    </>
  )
}

export default App
