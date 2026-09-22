import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <ul className='flex gap-4 bg-white p-4 text-black'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  )
}

export default Navbar