import { Metadata } from 'next'
import React from 'react'
import prisma from '@/prisma/client'
import { title } from 'process'

const MetadataPage = () => {
  return (
    <div>MetadataPage</div>
  )
}

export default MetadataPage

// for static data
export const metadata: Metadata = {
    title: '',
    description: ''
}

// for dynamic data
export async function generateMetadata(): Promise<Metadata> {
    const user = await prisma.user.findUnique({
        where:{
            email: 'mustafayousaf779@gmail.com'
        }
    });

    return {
        title: user?.name,
        description: "..."
    }
}