import './App.css'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/Themebutton';
import Card from './components/Themecard';


function App() {

  const [theme, setTheme] = useState("light");
  
  const darkTheme = () => {
    setTheme("dark");
  }
  const lightTheme = () => {
    setTheme("light");
  }
  // actual change in theme
  
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme])
  return (
    <>
     <ThemeProvider value={{darkTheme, lightTheme, theme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
      </ThemeProvider>
    </>
  )
}

export default App
