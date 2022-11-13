import React from 'react'
import { Link } from 'react-router-dom'
import SwitchTheme from './SwitchTheme'

type HeaderProps = {
  isDarkMode: boolean,
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header(props: HeaderProps) {
  return (
    <header className='fixed top-0 left-0 right-0'>
      <div className={`bg-white shadow ${props.isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container m-auto px-4 py-2 flex items-center justify-between">
          <div>
            <Link to="/" className='text-[#8168f8] text-2xl font-bold'>
              React Blog
            </Link>
          </div>
          <nav className='flex items-center'>
            <a href="/" className={`hover:text-[#8168f8] transition ml-8 ${props.isDarkMode ? 'text-white' : 'text-[#323232]'}`}>Item</a>
            <a href="/" className={`hover:text-[#8168f8] transition ml-8 ${props.isDarkMode ? 'text-white' : 'text-[#323232]'}`}>Item</a>
            <a href="/" className={`hover:text-[#8168f8] transition ml-8 ${props.isDarkMode ? 'text-white' : 'text-[#323232]'}`}>Item</a>
            <a href="/" className={`hover:text-[#8168f8] transition ml-8 ${props.isDarkMode ? 'text-white' : 'text-[#323232]'}`}>Item</a>
            <a href="/" className="btn">Learn more</a>
            <SwitchTheme isDarkMode={props.isDarkMode} setIsDarkMode={props.setIsDarkMode} />
          </nav>
        </div>
      </div>
    </header>
  )
}
