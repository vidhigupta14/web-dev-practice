import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-14 bg-slate-800 flex items-center text-white gap-5 px-4'>
      <h3 className='text-lg font-bold'>Website</h3>
      <ul className='flex gap-3 text-sm'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar