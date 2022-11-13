import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/cat.png'

type HomeProps = {
  isDarkMode: boolean
  posts: {id: number; title: string; img: string; body: string}[]
}

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
          {props.posts.map(post => (
            <div className='mb-[40px]' key={post.id}>
              <Link to={`/post/${post.id}`} className='block h-full p-[20px] border border-[#f1f0f0] hover:border-[#8168f8] rounded-[4px] bg-[#fafbfc] transition'>
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className='block w-full h-[200px] mb-[20px] rounded-[4px] object-cover'
                />
                <h2 className='text-[#323232] text-2xl font-semibold mb-[10px]'>
                  {post.title}
                </h2>
                <div className='text-[#787c84] text-sm'>September 28, 2022</div>
              </Link>
            </div>
          ))} 
        </div>
      </div>

    </div>
  )
}
