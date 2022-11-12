import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main>
        <Home isDarkMode={isDarkMode} />
      </main>

      <Footer isDarkMode={isDarkMode} />

    </div>
  )
}

export default App
