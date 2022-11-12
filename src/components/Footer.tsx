import React from 'react'

type FooterProps = {
  isDarkMode: boolean
}

export default function Footer(props: FooterProps) {
  return (
    <footer className={`border-t mt-[60px] py-[60px] ${props.isDarkMode ? 'bg-[#1c232e] border-gray-900' : 'bg-[#fafbfc] border-[#f1f0f0]'}`}>
      <div className="container m-auto px-4">
        <a href="https://github.com/VladBielievtsov" target="_blank" className={`${props.isDarkMode ? 'text-white' : 'text-[#323232]'} hover:text-[#8168f8] transition`}>My GitHub</a>
      </div>
    </footer>
  )
}
