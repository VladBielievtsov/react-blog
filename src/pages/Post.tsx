import React from 'react'
import { useParams, Link } from 'react-router-dom'
import parse from "html-react-parser";

type PostProps = {
  isDarkMode: boolean
  posts: {id: number; title: string; img: string; body: string}[]
}

export default function Post(props: PostProps) {
  const { id } = useParams()
  const post = props.posts.find((post) => post.id === Number(id))

  return (
    <div className='container px-4 m-auto pt-[100px]'>
      <div>
        <Link 
          to="/" 
          className='text-[#7859ec] font-semibold'
        >&lt; Back to Blog</Link>
      </div>
      <img 
        src={post?.img} 
        alt={post?.title} 
        className="mt-[40px] h-[600px] w-full object-cover rounded-[4px]"
      />
      <div className='max-w-[700px] m-auto mt-20'>
        <h1 className={`${props.isDarkMode ? 'text-white' : 'text-[#333]'} text-4xl font-bold`}>{post?.title}</h1>
        <div className={`${props.isDarkMode ? 'text-white' : 'text-[#333]'} mt-10`}>
          {parse(post?.body !)}
        </div>
      </div>
    </div>
  )
}
