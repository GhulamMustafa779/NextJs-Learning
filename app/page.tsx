'use client';

import {useState} from 'react';
// import { getServerSession } from 'next-auth'
import ProductCard from './components/ProductCard'
// import { authOptions } from './api/auth/[...nextauth]/route';
// import HeavyComponent from './components/HeavyComponent';

// To implement the lazy loading use dynamic feature
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(()=> import('@/app/components/HeavyComponent'),{
  ssr: false,
  loading: () => <p>Loading...</p>
}); 


export default function Home() {
  // we can get session by making this function async
  // const session = await getServerSession(authOptions);

  const [isActive, setActive] = useState(false)

  return (
    <main>
      { /*<h1 className='p-5'>{session && <span>{session.user!.name}</span> }</h1> */}
      <button className='btn' onClick={()=>setActive(true)}>Load Component</button>
      {isActive && <HeavyComponent />}
      <button className='btn'
      onClick={async()=>{
        const _ = ( await import('lodash') ).default;
        const users = [
          {name:'c'},
          {name:'a'},
          {name:'b'},
        ]

        const sorted = _.orderBy(users, ["name"]);
        console.log(sorted)
      }}>Sort</button>
      {/* This button will load lodash library when the button is clicked instead of at the start*/}
      {/*<ProductCard />*/}
    </main>
  )
}
