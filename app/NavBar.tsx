import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex p-5 bg-slate-100'>
        <Link href={"/"}  className='text-slate-900 hover:scale-105 mr-5'>Next.js</Link>
        <Link href={"/users"} className='text-slate-800 hover:scale-105 mr-5'>Users</Link>
    </div>
  )
}

export default NavBar