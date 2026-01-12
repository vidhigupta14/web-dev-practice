import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-white'>
      <h2 className='text-xl font-bold'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-amber-100'>Return Home</Link>
    </div>
  )
}