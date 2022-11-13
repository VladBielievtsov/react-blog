import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Post from './pages/Post'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  const data = [
    {
      "id": 1,
      "title": "How to Start a Make you Own IOS Apps",
      "img": "../01.png",
      "body": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
    },
    {
      "id": 2,
      "title": "What is A Computer and How to Use It?",
      "img": "../02.png",
      "body": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
    },
    {
      "id": 3,
      "title": "3 Reasons Why Dogs Can't Breathe in Space",
      "img": "../03.png",
      "body": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
    },
    {
      "id": 4,
      "title": "Article About How Cats Celebrate Birthdays",
      "img": "../04.png",
      "body": "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
    }
  ]
  
  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      
      <BrowserRouter>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main>
          <Routes>
            <Route 
              path="/" 
              element={<Home isDarkMode={isDarkMode} posts={data} />} 
            />
            <Route path="/post/:id" element={<Post isDarkMode={isDarkMode} posts={data} />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </main>

        <Footer isDarkMode={isDarkMode} />
      </BrowserRouter>

    </div>
  )
}

export default App
