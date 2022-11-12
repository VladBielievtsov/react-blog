import React from 'react'
import heroImg from '../assets/cat.png'

type HomeProps = {
  isDarkMode: boolean
}

const data = [
  {
    "id": 1,
    "title": "How to Start a Make you Own IOS Apps",
    "img": "../01.png"
  },
  {
    "id": 2,
    "title": "What is A Computer and How to Use It?",
    "img": "../02.png"
  },
  {
    "id": 3,
    "title": "3 Reasons Why Dogs Can't Breathe in Space",
    "img": "../03.png"
  },
  {
    "id": 4,
    "title": "Article About How Cats Celebrate Birthdays",
    "img": "../04.png"
  }
]

export default function Home(props: HomeProps) {
  return (
    <div>
      <div className='bg-[#f6c448] pb-16 pt-32 px-4 text-center flex flex-col items-center'>
        <img 
          src={heroImg} 
          alt="img" 
          className='max-w-xs w-full mb-10'
        />
        <h1 className='font-semibold text-4xl text-[#323232]'>My test blog on React.js + Typescript</h1>
      </div>

      <div className="container px-4 m-auto mt-[100px]">
        <div className='grid grid-cols-3 gap-[20px] auto-rows-fr'>
          {data.map(post => (
            <div className='mb-[40px]' key={post.id}>
              <a href="/" className='block h-full p-[20px] border border-[#f1f0f0] hover:border-[#8168f8] rounded-[4px] bg-[#fafbfc] transition'>
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className='block w-full h-[200px] mb-[20px] rounded-[4px] object-cover'
                />
                <h2 className='text-[#323232] text-2xl font-semibold mb-[10px]'>
                  {post.title}
                </h2>
                <div className='text-[#787c84] text-sm'>September 28, 2022</div>
              </a>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
