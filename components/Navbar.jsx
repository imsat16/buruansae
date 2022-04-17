import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-full bg-red-500 flex justify-end'>
        <Link href={'/'}>Logout</Link>
    </div>
  )
}

export default Navbar