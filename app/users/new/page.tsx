'use client'
import React, { use } from 'react'
import {useRouter} from 'next/navigation'

const NewUserPage = () => {
  const router = useRouter();
  return (
    <button className='btn btn-primary' onClick={()=> router.push('/users')}>Back</button>
  )
}

export default NewUserPage