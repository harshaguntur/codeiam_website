import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>

<div className='flex items-center mt-1 sm:container'>
    &nbsp;
        <Image src="/logo.png" alt="Codeiam" width={60} height={60} /> &nbsp;
        <div className='font-extrabold text-md md:text-2xl mt-2 '><div>
        C O D E&nbsp;<span className=' font-semibold'>I A M</span>
            </div>
            <div className='text-[9px] font-normal md:-mt-4'>Pre - Incubation and Hackathon Clusters</div>
        </div>
    </div>
    </Link>
    
  )
}

export default Logo